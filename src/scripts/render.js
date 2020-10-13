import * as ApiCall from '../screens/apiFetcher';
import * as DomManipulation from './domManipulation';

const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
mainContainer.id = 'mainContainer';
const imgContainer = document.createElement('div');
const inputContainer = document.createElement('div');
const input = document.createElement('input');
const buttonContainer = document.createElement('div');
const button = document.createElement('button');
let weatherObject;
buttonContainer.id = 'buttonContainer';
inputContainer.id = 'inputContainer';
button.id = 'apiButton';
button.textContent = 'WEATHER!';
input.id = 'apiInput';
buttonContainer.append(button);
inputContainer.append(input);
const img = document.createElement('img');
imgContainer.id = 'imgContainer';
img.id = 'imgAPI';
img.src = '#';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';

// check on how to make the fetch return to be a promise
button.addEventListener('click', () => {
  // ApiCall.imgCreator(imgContainer, img,
  //   ApiCall.apiFetcher(baseUrl, DomManipulation.inputHandler(input)));
  weatherObject = ApiCall.promiseToJson(baseUrl, DomManipulation.inputHandler(input), 'metric');
  // ApiCall.weatherObjectConstructor();
});
// ApiCall.imgCreator(imgContainer, img, ApiCall.iconGetter(weatherObject.icon));
console.log(weatherObject);
// I need to create another function that uses weatherObject when the object is ready (async/await)
DomManipulation.enterShortcut(button, input);


mainContainer.append(inputContainer, buttonContainer, imgContainer);
export default mainContainer;