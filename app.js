const vocabularyInput = document.querySelector('#vocabulary-input');
const vocabularyList = document.querySelector('#vocabulary-list');
const vocabularyCount = document.querySelector('#vocabulary-count');

function updateVocabulary() {
  const items = vocabularyInput.value
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
}

vocabularyInput.addEventListener('input', updateVocabulary);
updateVocabulary();
