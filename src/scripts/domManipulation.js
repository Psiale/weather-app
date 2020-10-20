
const inputHandler = (inputElement) => {
  if (inputElement.value) {
    return inputElement.value;
  }
  return Error('No input element');
};
const enterShortcut = (btn, element) => {
  element.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      btn.click();
    }
  });
};

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const elementGenerator = (htmlElem, elemId = null, elemClass = null) => {
  const createdElement = document.createElement(`${htmlElem}`);
  if (elemClass !== null) createdElement.classList.add(elemClass);
  if (elemId !== null) createdElement.id = elemId;
  return createdElement;
};

const textGenerator = (text) => {
  const textElement = document.createElement('p');
  if (text !== '') textElement.textContent = text;
  return textElement;
};


function convertToF(celsius) {
  return celsius * (9 / 5 + 32);
}

export {
  inputHandler, enterShortcut, elementGenerator, textGenerator, capitalize, convertToF,
};