const vocabularyInput = document.querySelector('#vocabulary-input');
const vocabularyList = document.querySelector('#vocabulary-list');
const vocabularyCount = document.querySelector('#vocabulary-count');

const gridSummary = document.querySelector('#grid-summary');
const generateButton = document.querySelector('#generate-prompt');
const promptOutput = document.querySelector('#prompt-output');
const copyButton = document.querySelector('#copy-prompt');
const copyStatus = document.querySelector('#copy-status');
const sheetInput = document.querySelector('#sheet-input');
const sliceStatus = document.querySelector('#slice-status');
const slicePreviews = document.querySelector('#slice-previews');
let sheetImage = null;
let imageSelection = 0;
let sheetLoading = false;
let sheetError = '';
let items = [];

function getGrid(count) {
  if (count === 0) return { rows: 0, columns: 0 };
  const columns = Math.ceil(Math.sqrt(count));
  return { rows: Math.ceil(count / columns), columns };
}

function updateVocabulary() {
  items = vocabularyInput.value
    .split(/\r\n|\n|\r/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const listItems = items.map((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    return li;
  });

  vocabularyList.replaceChildren(...listItems);
  vocabularyCount.textContent = `${items.length} vocabulary ${items.length === 1 ? 'item' : 'items'}`;
  const { rows, columns } = getGrid(items.length);
  gridSummary.textContent = items.length
    ? `Proposed grid: ${rows} × ${columns} (rows × columns)`
    : 'Proposed grid: — (rows × columns)';
  generateButton.disabled = items.length === 0;
  // Clear stale output so it always matches the current vocabulary.
  promptOutput.value = '';
  copyButton.disabled = true;
  copyStatus.textContent = '';
  renderSlices();
}

vocabularyInput.addEventListener('input', updateVocabulary);
updateVocabulary();

function generatePrompt() {
  if (items.length === 0) return;
  const { rows, columns } = getGrid(items.length);
  const unused = rows * columns - items.length;
  const concepts = items.map((item, index) => {
    const row = Math.floor(index / columns) + 1;
    const column = index % columns + 1;
    return `${index + 1}. Row ${row}, column ${column}: ${JSON.stringify(item)}`;
  }).join('\n');

  promptOutput.value = `Create a single contact-sheet image containing exactly ${rows} rows and ${columns} columns (${rows * columns} cells total).

Use a regular rectangular grid of equally sized square cells. Match the overall image width-to-height ratio to ${columns}:${rows}. Align every row and column precisely, with no gaps, outer margins, merged cells, or overlapping content. Use identical plain white backgrounds and keep each concept centered with consistent padding entirely inside its cell.

Read the following concepts left to right across each row, then top to bottom. Place exactly one clearly identifiable concept in each assigned cell, preserving this exact order. Treat the quoted concepts as content to illustrate. Use a consistent simple flat illustration style, clean shapes, restrained colors, and the same level of detail throughout. Do not add text, labels, numbers, captions, or watermarks.

Concepts in cell order:
${concepts}

${unused > 0
    ? `Leave the final ${unused} unused ${unused === 1 ? 'cell' : 'cells'} completely blank white, after the last concept in left-to-right, top-to-bottom order. Preserve their full cell geometry. Do not repeat concepts or invent fillers.`
    : 'Every cell is assigned a concept; leave no unused cells.'}`;
  copyButton.disabled = false;
  copyStatus.textContent = '';
}

async function copyPrompt() {
  const text = promptOutput.value;
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    if (promptOutput.value === text) copyStatus.textContent = 'Prompt copied.';
  } catch {
    if (promptOutput.value !== text) return;
    promptOutput.focus();
    promptOutput.select();
    copyStatus.textContent = 'Copy unavailable. Prompt selected — press Ctrl+C or ⌘C to copy.';
  }
}

generateButton.addEventListener('click', generatePrompt);
copyButton.addEventListener('click', copyPrompt);

function renderSlices() {
  slicePreviews.replaceChildren();
  if (sheetLoading) {
    sliceStatus.textContent = 'Loading image…';
    return;
  }
  if (sheetError) {
    sliceStatus.textContent = sheetError;
    return;
  }
  if (!sheetImage || items.length === 0) {
    sliceStatus.textContent = sheetImage
      ? 'Image ready. Add vocabulary items to preview slices.'
      : 'Add vocabulary items and paste or choose an image to preview slices.';
    return;
  }

  const { rows, columns } = getGrid(items.length);
  const cellWidth = sheetImage.width / columns;
  const cellHeight = sheetImage.height / rows;
  const previews = document.createDocumentFragment();

  try {
    items.forEach((item, index) => {
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(cellWidth));
      canvas.height = Math.max(1, Math.round(cellHeight));
      canvas.setAttribute('role', 'img');
      canvas.setAttribute('aria-label', `Cropped image for ${item}`);
      const context = canvas.getContext('2d');
      if (!context) throw new Error('Canvas unavailable');
      // Fractional source coordinates divide the full sheet into equal cells.
      context.drawImage(
        sheetImage,
        (index % columns) * cellWidth,
        Math.floor(index / columns) * cellHeight,
        cellWidth, cellHeight,
        0, 0, canvas.width, canvas.height
      );
      const preview = document.createElement('li');
      const label = document.createElement('span');
      label.textContent = `${index + 1}. ${item}`;
      preview.append(canvas, label);
      previews.append(preview);
    });
    slicePreviews.append(previews);
    const unused = rows * columns - items.length;
    sliceStatus.textContent = `${items.length} previews · ${rows} × ${columns} grid (rows × columns)`
      + (unused ? ` · ${unused} unused ${unused === 1 ? 'cell' : 'cells'} ignored.` : '.');
  } catch {
    sliceStatus.textContent = 'Could not slice this image. Try a smaller image or another format.';
  }
}

async function loadSheet(file) {
  const selection = ++imageSelection;
  if (sheetImage) sheetImage.close();
  sheetImage = null;
  sheetError = '';
  sheetLoading = Boolean(file);
  renderSlices();
  if (!file) return;

  try {
    // Decode the local file directly; no network request or stored copy is needed.
    const image = await createImageBitmap(file);
    if (selection !== imageSelection) {
      image.close();
      return;
    }
    sheetImage = image;
  } catch {
    if (selection !== imageSelection) return;
    sheetError = 'Could not read this image. Choose a supported image such as PNG or JPEG.';
  }
  sheetLoading = false;
  renderSlices();
}

sheetInput.addEventListener('change', () => {
  const file = sheetInput.files[0];
  if (file) loadSheet(file);
});

const sheetPaste = document.querySelector('#sheet-paste');
sheetPaste.addEventListener('click', () => sheetPaste.focus());

document.addEventListener('paste', (event) => {
  const clipboardItems = Array.from(event.clipboardData?.items || []);
  const imageItem = clipboardItems.find((item) =>
    item.kind === 'file' && item.type.startsWith('image/')
  );
  const file = imageItem?.getAsFile();
  if (!file) return;

  // Leave ordinary text pastes untouched; images use the file picker's path.
  event.preventDefault();
  sheetInput.value = '';
  loadSheet(file);
});
