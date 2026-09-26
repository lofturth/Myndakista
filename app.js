const vocabularyInput = document.querySelector('#vocabulary-input');
const vocabularyList = document.querySelector('#vocabulary-list');
const vocabularyCount = document.querySelector('#vocabulary-count');

const gridSummary = document.querySelector('#grid-summary');
const generateButton = document.querySelector('#generate-prompt');
const promptOutput = document.querySelector('#prompt-output');
const copyButton = document.querySelector('#copy-prompt');
const copyStatus = document.querySelector('#copy-status');
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
