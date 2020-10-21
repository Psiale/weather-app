
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


function unitConverter(value, units) {
  if (units === 'metric') {
    const result = (value * 9 / 5) + 32;
    return Math.round(result);
  }
  const result = (value - 32) * (5 / 9);
  return Math.round(result);
}

function unitSwapper(value) {
  (value === 'metric') ? value = 'imperial' : value = 'metric';
  // console.log(value);
  return value;
}
const toggleColor = (toggleInput, value) => {
  (value === 'metric') ? toggleInput.checked = false : toggleInput.checked = true;
  // console.log(value);
};

export {
  inputHandler, enterShortcut,
  elementGenerator, textGenerator, capitalize, unitConverter, unitSwapper,
  toggleColor,
};