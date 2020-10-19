import * as ApiCall from '../screens/apiFetcher';
import * as DomManipulation from './domManipulation';
import WeatherImage from '../classes/weatherImage';
import cloudy from '../images/clouds.png';
import stormy from '../images/storm.png';
import sunny from '../images/clear.png';
import hazy from '../images/haze.png';
import rainy from '../images/rain.png';
import snowy from '../images/snow.png';

const weatherArray = [WeatherImage('Clouds', cloudy),
  WeatherImage('Snow', snowy),
  WeatherImage('Rain', rainy),
  WeatherImage('Drizzle', rainy),
  WeatherImage('Thunderstorm', stormy),
  WeatherImage('Clear', sunny),
  WeatherImage('Haze', hazy)];

// Change all document createElement and text to use the general purpose functions
const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
mainContainer.id = 'mainContainer';
const imgContainer = document.createElement('div');
const inputContainer = document.createElement('div');
const mainInfoContainer = DomManipulation.elementGenerator('div', 'mainInfoContainer');
const weatherDescriptionContainer = DomManipulation.elementGenerator('div', 'weatherDescriptionContainer');
const weatherIconContainer = DomManipulation.elementGenerator('div', 'weatherIconContainer');
const weatherIcon = DomManipulation.elementGenerator('img', 'weatherIcon');
const weatherInfoDescriptionContainer = DomManipulation.elementGenerator('div', 'weatherInfoDescriptionContainer');
const DAYTEXT = 'Today';
const mainWeather = DomManipulation.elementGenerator('div', 'mainWeather');
const mainTemp = DomManipulation.elementGenerator('div', 'mainTemp');
const tempMinMaxContainer = DomManipulation.elementGenerator('div', 'tempMinMaxContainer');
const input = document.createElement('input');
const buttonContainer = document.createElement('div');
const button = document.createElement('button');
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
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
button.addEventListener('click', () => {
  mainWeather.innerHTML = ''
  mainTemp.innerHTML = ''
  weatherIconContainer.innerHTML = '';
  tempMinMaxContainer.innerHTML = '';
  weatherInfoDescriptionContainer.innerHTML = '';
  ApiCall.promiseToJson(baseUrl, DomManipulation.inputHandler(input), 'metric').then(
    (weather) => {
      ApiCall.imgCreator(
        imgContainer, img, ApiCall.iconGetter(weather.mainWeather, weatherArray),
      );
      mainWeather.append(DomManipulation.textGenerator(weather.mainWeather));
      mainTemp.append(DomManipulation.textGenerator(`${weather.temp}°`));
      ApiCall.imgCreator(weatherIconContainer, weatherIcon,
        ApiCall.weatherIconGetter(weather.icon));
      weatherInfoDescriptionContainer.append(DAYTEXT,
        DomManipulation.textGenerator(weather.weatherDescription));
      tempMinMaxContainer.append(DomManipulation.textGenerator(
        `${weather.tempMax}° / ${weather.tempMin}°`,
      ));
    },
  );
});
DomManipulation.enterShortcut(button, input);
mainInfoContainer.append(mainWeather, mainTemp);
weatherDescriptionContainer.append(
  weatherIconContainer, weatherInfoDescriptionContainer, tempMinMaxContainer);
mainContainer.append(
  inputContainer, buttonContainer, mainInfoContainer,
  imgContainer, weatherDescriptionContainer,
);
export default mainContainer;