const translations = {
  is: {
    generate: 'Semja fyrirmæli',
    subtitle: 'Búðu til myndir fyrir orðalistann þinn með hjálp gervigreindar.', vocabulary: 'Orð og hugtök', hint: 'Settu eitt orð eða hugtak í hverja línu.',
    example: 'epli\nrautt reiðhjól\nfjall', parsed: 'Orð og hugtök úr listanum',
    prompt: 'Fyrirmæli fyrir myndablað',
    handoff: 'Afritaðu fyrirmælin og límdu þau inn í ChatGPT, Gemini eða aðra myndagerðargervigreind. Búðu til myndina þar og afritaðu hana síðan aftur hingað.', promptHint: 'Sláðu inn orð eða hugtök til að sjá fyrirmælin.', copy: 'Afrita fyrirmæli',
    sheet: 'Myndablað', sheetHint: 'Límdu inn eða veldu myndablað sem passar nákvæmlega við reitaskiptinguna. Myndirnar haldast í þessum vafra. Ef orðalistanum er breytt er myndablaðið skorið aftur samkvæmt nýju reitaskiptingunni.',
    paste: 'Líma inn myndablað', pasteHint: 'Afritaðu myndina, smelltu hér og ýttu á ⌘V á Mac eða Ctrl+V á Windows. Þú getur líka límt mynd inn hvar sem er á síðunni.',
    alternative: 'Eða veldu myndaskrá', choose: 'Velja mynd', zoom: 'Aðdráttur', previews: 'Forskoðun orðaforðamynda', language: 'Tungumál',
    count: n => `Fjöldi orða og hugtaka: ${n}`,
    grid: size => `Tillaga að reitaskiptingu: ${size} (raðir × dálkar)`,
    copied: 'Fyrirmæli afrituð.', copyFallback: 'Ekki tókst að afrita. Fyrirmælin eru valin — ýttu á Ctrl+C eða ⌘C til að afrita.',
    loading: 'Hleð mynd…', ready: 'Myndin er tilbúin. Sláðu inn orð eða hugtök til að forskoða myndskurðinn.',
    empty: 'Sláðu inn orð eða hugtök og límdu inn eða veldu mynd til að forskoða myndskurðinn.',
    readError: 'Ekki tókst að lesa myndina. Veldu mynd á studdu sniði, til dæmis PNG eða JPEG.',
    sliceError: 'Ekki tókst að skera myndina. Prófaðu minni mynd eða annað snið.',
    cropLabel: item => `Útskorin mynd fyrir ${item}`,
    clickToCopy: 'Smelltu til að afrita mynd',
    imageCopied: 'Mynd afrituð!',
    imageCopyError: 'Ekki tókst að afrita mynd.',
    sliceSummary: (n, rows, columns, unused) => `Forskoðun: ${n} myndir · ${rows} × ${columns} reitir (raðir × dálkar)` + (unused ? ` · Auðir reitir sem sleppt er: ${unused}.` : '.'),
    cell: (i, row, column, item) => `${i}. Röð ${row}, dálkur ${column}: ${JSON.stringify(item)}`,
    promptText: (rows, columns, concepts, unused) => `Búðu til eitt myndablað með nákvæmlega ${rows} röðum og ${columns} dálkum (alls ${rows * columns} reitir).

Notaðu reglulega, rétthyrnda reitaskiptingu með jafnstórum ferningslaga reitum. Hlutfall breiddar og hæðar myndarinnar skal vera ${columns}:${rows}. Láttu allar raðir og dálka standast nákvæmlega á, án bila, ytri spássía, sameinaðra reita eða skörunar. Hafðu sama hvíta bakgrunn í öllum reitum og hvert myndefni fyrir miðju, með jöfnu svigrúmi í kring og að öllu leyti innan reitsins.

Fylgdu listanum frá vinstri til hægri í hverri röð og síðan ofan frá og niður. Sýndu nákvæmlega eitt skýrt og auðþekkjanlegt hugtak í hverjum tilgreindum reit, í þessari röð. Textinn innan gæsalappa lýsir því sem á að myndskreyta. Notaðu samræmdan, einfaldan og flatan myndskreytingarstíl, skýr form, hóflega litanotkun og sama nákvæmnisstig í öllum myndum. Ekki bæta við texta, merkingum, tölum, myndatextum eða vatnsmerkjum.

Orð og hugtök í reitaröð:
${concepts}

${unused > 0 ? `Fjöldi ónotaðra reita: ${unused}. Skildu alla ónotaða reiti eftir alveg auða og hvíta, á eftir síðasta hugtakinu í röðinni frá vinstri til hægri og ofan frá og niður. Haltu fullri stærð og lögun þeirra. Ekki endurtaka hugtök eða bæta við myndefni til uppfyllingar.` : 'Hverjum reit hefur verið úthlutað hugtaki; enginn reitur á að vera auður.'}`
  },
  en: {
    generate: 'Generate prompt',
    subtitle: 'Create images for your vocabulary list with the help of AI.', vocabulary: 'Vocabulary concepts', hint: 'Enter one item per line.',
    example: 'apple\nred bicycle\nmountain', parsed: 'Parsed vocabulary items',
    prompt: 'Contact-sheet prompt', handoff: 'Copy the prompt into ChatGPT, Gemini, or another image generator. Generate the image there, then copy the finished image back here.', promptHint: 'Add vocabulary items to see the prompt.', copy: 'Copy prompt',
    sheet: 'Contact-sheet image', sheetHint: 'Paste or choose a sheet matching the current grid exactly. Images stay in this browser. Editing vocabulary re-slices the sheet using the updated grid.',
    paste: 'Paste a contact-sheet image', pasteHint: 'Copy the image, click here, then press ⌘V on Mac or Ctrl+V on Windows. You can also paste an image anywhere on this page.',
    alternative: 'Or choose an image file', choose: 'Choose image', zoom: 'Zoom', previews: 'Vocabulary image previews', language: 'Language',
    count: n => `${n} vocabulary ${n === 1 ? 'item' : 'items'}`,
    grid: size => `Proposed grid: ${size} (rows × columns)`,
    copied: 'Prompt copied.', copyFallback: 'Copy unavailable. Prompt selected — press Ctrl+C or ⌘C to copy.',
    loading: 'Loading image…', ready: 'Image ready. Add vocabulary items to preview slices.', empty: 'Add vocabulary items and paste or choose an image to preview slices.',
    readError: 'Could not read this image. Choose a supported image such as PNG or JPEG.', sliceError: 'Could not slice this image. Try a smaller image or another format.',
    cropLabel: item => `Cropped image for ${item}`,
    clickToCopy: 'Click to copy image',
    imageCopied: 'Image copied!',
    imageCopyError: 'Failed to copy image.',
    sliceSummary: (n, rows, columns, unused) => `${n} previews · ${rows} × ${columns} grid (rows × columns)` + (unused ? ` · ${unused} unused ${unused === 1 ? 'cell' : 'cells'} ignored.` : '.'),
    cell: (i, row, column, item) => `${i}. Row ${row}, column ${column}: ${JSON.stringify(item)}`,
    promptText: (rows, columns, concepts, unused) => `Create a single contact-sheet image containing exactly ${rows} rows and ${columns} columns (${rows * columns} cells total).

Use a regular rectangular grid of equally sized square cells. Match the overall image width-to-height ratio to ${columns}:${rows}. Align every row and column precisely, with no gaps, outer margins, merged cells, or overlapping content. Use identical plain white backgrounds and keep each concept centered with consistent padding entirely inside its cell.

Read the following concepts left to right across each row, then top to bottom. Place exactly one clearly identifiable concept in each assigned cell, preserving this exact order. Treat the quoted concepts as content to illustrate. Use a consistent simple flat illustration style, clean shapes, restrained colors, and the same level of detail throughout. Do not add text, labels, numbers, captions, or watermarks.

Concepts in cell order:
${concepts}

${unused > 0
    ? `Leave the final ${unused} unused${unused === 1 ? 'cell' : 'cells'} completely blank white, after the last concept in left-to-right, top-to-bottom order. Preserve their full cell geometry. Do not repeat concepts or invent fillers.`
    : 'Every cell is assigned a concept; leave no unused cells.'}`
  }
};
let language = 'is';
try {
  const saved = localStorage.getItem('myndakista-language');
  if (saved === 'is' || saved === 'en') language = saved;
} catch { /* Language switching still works if browser storage is unavailable. */ }
let copyMessage = '';
const t = () => translations[language];

const vocabularyInput = document.querySelector('#vocabulary-input');
const vocabularyList = document.querySelector('#vocabulary-list');
const vocabularyCount = document.querySelector('#vocabulary-count');

const generateButton = document.querySelector('#generate-prompt');
const promptStep = document.querySelector('#prompt-step');
const imageStep = document.querySelector('#image-step');
const resultsStep = document.querySelector('#results-step');

function revealStep(section) {
  if (!section.hidden) return;
  section.hidden = false;
  section.focus({ preventScroll: true });
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const gridSummary = document.querySelector('#grid-summary');
const promptOutput = document.querySelector('#prompt-output');
const copyButton = document.querySelector('#copy-prompt');
const copyStatus = document.querySelector('#copy-status');
const sheetInput = document.querySelector('#sheet-input');
const sliceStatus = document.querySelector('#slice-status');
const slicePreviews = document.querySelector('#slice-previews');
const cropInset = document.querySelector('#crop-inset');
const cropInsetValue = document.querySelector('#crop-inset-value');
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

function resizeVocabularyInput() {
  vocabularyInput.style.height = 'auto';
  const styles = getComputedStyle(vocabularyInput);
  const borders = parseFloat(styles.borderTopWidth) + parseFloat(styles.borderBottomWidth);
  vocabularyInput.style.height = `${Math.ceil(vocabularyInput.scrollHeight + borders)}px`;
}

window.addEventListener('resize', resizeVocabularyInput);

function updateVocabulary() {
  resizeVocabularyInput();
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
  updateVocabularySummary();
  generateButton.disabled = items.length === 0;
  if (!promptStep.hidden) generatePrompt();
  renderSlices();
}

vocabularyInput.addEventListener('input', updateVocabulary);

function generatePrompt() {
  copyMessage = '';
  copyStatus.textContent = '';
  copyButton.disabled = items.length === 0;
  if (items.length === 0) {
    promptOutput.value = '';
    return;
  }
  const { rows, columns } = getGrid(items.length);
  const unused = rows * columns - items.length;
  const concepts = items.map((item, index) => {
    const row = Math.floor(index / columns) + 1;
    const column = index % columns + 1;
    return t().cell(index + 1, row, column, item);
  }).join('\n');

  promptOutput.value = t().promptText(rows, columns, concepts, unused);
}

async function copyPrompt() {
  const text = promptOutput.value;
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    if (promptOutput.value === text) {
      copyMessage = 'copied';
      copyStatus.textContent = t().copied;
      revealStep(imageStep);
    }
  } catch {
    if (promptOutput.value !== text) return;
    promptOutput.focus();
    promptOutput.select();
    copyMessage = 'copyFallback';
    copyStatus.textContent = t().copyFallback;
  }
}

generateButton.addEventListener('click', () => {
  if (!items.length) return;
  generatePrompt();
  revealStep(promptStep);
});

copyButton.addEventListener('click', copyPrompt);

promptOutput.addEventListener('copy', (event) => {
  if (!event.clipboardData || !promptOutput.value ||
      promptOutput.selectionStart !== 0 ||
      promptOutput.selectionEnd !== promptOutput.value.length) return;
  event.clipboardData.setData('text/plain', promptOutput.value);
  event.preventDefault();
  copyMessage = 'copied';
  copyStatus.textContent = t().copied;
  revealStep(imageStep);
});

async function copyCanvasToClipboard(canvas, labelElement, defaultLabel) {
  try {
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
    if (!blob) throw new Error('Blob creation failed');
    await navigator.clipboard.write([
      new ClipboardItem({ 'image/png': blob })
    ]);
    labelElement.textContent = `✓ ${t().imageCopied}`;
  } catch (err) {
    labelElement.textContent = `✕ ${t().imageCopyError}`;
  } finally {
    setTimeout(() => {
      labelElement.textContent = defaultLabel;
    }, 2000);
  }
}

function renderSlices() {
  slicePreviews.replaceChildren();
  if (sheetLoading) {
    sliceStatus.textContent = t().loading;
    return;
  }
  if (sheetError) {
    sliceStatus.textContent = t()[sheetError];
    return;
  }
  if (!sheetImage || items.length === 0) {
    sliceStatus.textContent = sheetImage
      ? t().ready
      : t().empty;
    return;
  }

  const { rows, columns } = getGrid(items.length);
  const cellWidth = sheetImage.width / columns;
  const cellHeight = sheetImage.height / rows;
  const insetRatio = Number(cropInset.value) / 100;
  const insetX = cellWidth * insetRatio;
  const insetY = cellHeight * insetRatio;
  const previews = document.createDocumentFragment();

  try {
    items.forEach((item, index) => {
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(cellWidth));
      canvas.height = Math.max(1, Math.round(cellHeight));
      canvas.setAttribute('role', 'img');
      canvas.setAttribute('aria-label', t().cropLabel(item));
      const context = canvas.getContext('2d');
      if (!context) throw new Error('Canvas unavailable');
      
      context.drawImage(
        sheetImage,
        (index % columns) * cellWidth + insetX,
        Math.floor(index / columns) * cellHeight + insetY,
        cellWidth - 2 * insetX, cellHeight - 2 * insetY,
        0, 0, canvas.width, canvas.height
      );

      const preview = document.createElement('li');
      const label = document.createElement('span');
      const defaultText = `${index + 1}. ${item}`;
      label.textContent = defaultText;

      // Styling & accessibility setup to make the slice clickable and clear
      preview.style.cursor = 'pointer';
      preview.setAttribute('tabindex', '0');
      preview.setAttribute('role', 'button');
      preview.title = t().clickToCopy;

      const triggerCopy = () => copyCanvasToClipboard(canvas, label, defaultText);

      preview.addEventListener('click', triggerCopy);
      preview.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          triggerCopy();
        }
      });

      preview.append(canvas, label);
      previews.append(preview);
    });
    slicePreviews.append(previews);
    const unused = rows * columns - items.length;
    sliceStatus.textContent = t().sliceSummary(items.length, rows, columns, unused);
  } catch {
    sliceStatus.textContent = t().sliceError;
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
    const image = await createImageBitmap(file);
    if (selection !== imageSelection) {
      image.close();
      return;
    }
    sheetImage = image;
  } catch {
    if (selection !== imageSelection) return;
    sheetError = 'readError';
  }
  sheetLoading = false;
  renderSlices();
  if (sheetImage) {
    imageStep.hidden = false;
    revealStep(resultsStep);
  }
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

  event.preventDefault();
  sheetInput.value = '';
  loadSheet(file);
});

cropInset.addEventListener('input', () => {
  const percentage = `${Number(cropInset.value)}%`;
  cropInsetValue.textContent = percentage;
  cropInset.setAttribute('aria-valuetext', percentage);
  renderSlices();
});

function updateVocabularySummary() {
  vocabularyCount.textContent = t().count(items.length);
  const { rows, columns } = getGrid(items.length);
  gridSummary.textContent = t().grid(items.length ? `${rows} × ${columns}` : '—');
}

function applyLanguage() {
  document.documentElement.lang = language;
  const labels = {
    '#app-subtitle': 'subtitle',
    '#generate-prompt': 'generate', '#vocabulary-label': 'vocabulary', '#vocabulary-hint': 'hint',
    '#prompt-handoff': 'handoff', '#prompt-label': 'prompt', '#copy-prompt': 'copy',
    '#sheet-label': 'sheet', '#sheet-hint': 'sheetHint', '#sheet-paste strong': 'paste',
    '#paste-hint': 'pasteHint', 'label[for="sheet-input"]:not(#sheet-label)': 'alternative',
    '#choose-sheet': 'choose', 'label[for="crop-inset"]': 'zoom'
  };
  for (const [selector, key] of Object.entries(labels)) {
    document.querySelector(selector).textContent = t()[key];
  }
  vocabularyInput.placeholder = t().example;
  promptOutput.placeholder = t().promptHint;
  vocabularyList.setAttribute('aria-label', t().parsed);
  slicePreviews.setAttribute('aria-label', t().previews);
  sheetPaste.setAttribute('aria-label', t().paste);
  document.querySelector('#language-switch').setAttribute('aria-label', t().language);
  document.querySelectorAll('[data-language]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.language === language));
  });
  updateVocabularySummary();
  if (promptOutput.value) {
    const previousCopyMessage = copyMessage;
    generatePrompt();
    copyMessage = previousCopyMessage;
  }
  copyStatus.textContent = copyMessage ? t()[copyMessage] : '';
  renderSlices();
}

document.querySelector('#choose-sheet').addEventListener('click', () => sheetInput.click());
document.querySelectorAll('[data-language]').forEach(button => {
  button.addEventListener('click', () => {
    language = button.dataset.language;
    try { localStorage.setItem('myndakista-language', language); } catch { /* Optional storage. */ }
    applyLanguage();
  });
});

updateVocabulary();
applyLanguage();