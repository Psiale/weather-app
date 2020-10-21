import * as ApiCall from '../screens/apiFetcher';
import * as DomManipulation from './domManipulation';
import WeatherImage from '../classes/weatherImage';
import cloudy from '../images/clouds.png';
import stormy from '../images/storm.png';
import sunny from '../images/clear.png';
import hazy from '../images/haze.png';
import rainy from '../images/rain.png';
import snowy from '../images/snow.png';
import error from '../images/error.png';
import search from '../images/search.png';

const weatherArray = [WeatherImage('Clouds', cloudy),
  WeatherImage('Snow', snowy),
  WeatherImage('Rain', rainy),
  WeatherImage('Drizzle', rainy),
  WeatherImage('Thunderstorm', stormy),
  WeatherImage('Clear', sunny),
  WeatherImage('Haze', hazy),
  WeatherImage('city not found', error)];

// Change all document createElement and text to use the general purpose functions
const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
mainContainer.id = 'mainContainer';
const imgContainer = document.createElement('div');
const mainContainerTopChild = DomManipulation.elementGenerator('div', 'mainContainerTopChild');
const mainContainerBottomChild = DomManipulation.elementGenerator('div', 'mainContainerBottomChild');
const searchBarContainer = DomManipulation.elementGenerator('div', 'searchBarContainer');
const inputContainer = DomManipulation.elementGenerator('div', 'inputContainer');
const toggleContainer = DomManipulation.elementGenerator('div', 'toggleContainer');
const celsiusContainer = DomManipulation.elementGenerator('div', 'celsiusContainer', 'tempText');
celsiusContainer.append(DomManipulation.textGenerator('Celsius'));
const fahrenheitContainer = DomManipulation.elementGenerator('div', 'fahrenheitContainer', 'tempText');
fahrenheitContainer.append(DomManipulation.textGenerator('Fahrenheit'));
const toggleLabel = DomManipulation.elementGenerator('label', 'switch');
const toggleInput = DomManipulation.elementGenerator('input', 'toggleInput');

toggleInput.type = 'checkbox';
const toggleSpan = DomManipulation.elementGenerator('span', 'toggleSpan', 'slider');
toggleSpan.classList.add('round');
toggleLabel.append(toggleInput, toggleSpan);

const mainInfoContainer = DomManipulation.elementGenerator('div', 'mainInfoContainer');
const weatherDescriptionContainer = DomManipulation.elementGenerator('div', 'weatherDescriptionContainer');
const weatherIconContainer = DomManipulation.elementGenerator('div', 'weatherIconContainer');
const weatherIcon = DomManipulation.elementGenerator('img', 'weatherIcon');
const weatherInfoDescriptionContainer = DomManipulation.elementGenerator('div', 'weatherInfoDescriptionContainer');
const DAYTEXT = 'Today';
const cityNameContainer = DomManipulation.elementGenerator('div', 'cityNameContainer');
const mainWeather = DomManipulation.elementGenerator('div', 'mainWeather');
const mainTemp = DomManipulation.elementGenerator('div', 'mainTemp');
const tempMinMaxContainer = DomManipulation.elementGenerator('div', 'tempMinMaxContainer');
const input = document.createElement('input');
const buttonContainer = DomManipulation.elementGenerator('div', 'buttonContainer');
const button = document.createElement('button');
button.id = 'apiButton';
button.textContent = 'WEATHER!';
input.id = 'apiInput';
input.placeholder = 'Search a new city';
buttonContainer.append(button);
inputContainer.append(input);
searchBarContainer.append(inputContainer, buttonContainer);
const img = document.createElement('img');
imgContainer.id = 'imgContainer';
img.id = 'imgAPI';
ApiCall.imgCreator(imgContainer, img, search);
cityNameContainer.append(DomManipulation.textGenerator('Search a city'));
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
button.addEventListener('click', () => {
  cityNameContainer.innerHTML = '';
  mainWeather.innerHTML = '';
  mainTemp.innerHTML = '';
  weatherIconContainer.innerHTML = '';
  tempMinMaxContainer.innerHTML = '';
  weatherInfoDescriptionContainer.innerHTML = '';
  let units = 'metric';
  ApiCall.promiseToJson(baseUrl, DomManipulation.inputHandler(input), units).then(
    (weather) => {
      if (weather.mainWeather === 'city not found') {
        toggleContainer.innerHTML = '';
        const capitalized = DomManipulation.capitalize(weather.mainWeather);
        mainWeather.append(DomManipulation.textGenerator(DomManipulation.capitalize(capitalized)));
        mainInfoContainer.append(
          mainWeather,
        );
        ApiCall.imgCreator(
          imgContainer, img, ApiCall.iconGetter(weather.mainWeather, weatherArray),
        );
      } else {
        toggleInput.checked = false;
        toggleContainer.append(celsiusContainer, toggleLabel, fahrenheitContainer);
        ApiCall.imgCreator(
          imgContainer, img, ApiCall.iconGetter(weather.mainWeather, weatherArray),
        );
        cityNameContainer.append(
          DomManipulation.textGenerator(
            DomManipulation.capitalize(DomManipulation.inputHandler(input)),
          ),
        );
        mainWeather.append(DomManipulation.textGenerator(weather.mainWeather));
        mainTemp.append(DomManipulation.textGenerator(`${weather.temp}°`));
        toggleInput.addEventListener('click', async () => {
          weather.temp = DomManipulation.unitConverter(weather.temp, units);
          weather.tempMin = DomManipulation.unitConverter(weather.tempMin, units);
          weather.tempMax = DomManipulation.unitConverter(weather.tempMax, units);
          units = DomManipulation.unitSwapper(units);
          DomManipulation.toggleColor(toggleInput, units);
          mainTemp.innerHTML = '';
          tempMinMaxContainer.innerHTML = '';
          mainTemp.append(DomManipulation.textGenerator(`${weather.temp}°`));

          tempMinMaxContainer.append(DomManipulation.textGenerator(
            `${weather.tempMax}° / ${weather.tempMin}°`,
          ));
        });
        ApiCall.imgCreator(weatherIconContainer, weatherIcon,
          ApiCall.weatherIconGetter(weather.icon, weatherIcon));
        weatherInfoDescriptionContainer.append(DAYTEXT,
          DomManipulation.textGenerator(weather.weatherDescription));
        tempMinMaxContainer.append(DomManipulation.textGenerator(
          `${weather.tempMax}° / ${weather.tempMin}°`,
        ));
        weatherDescriptionContainer.append(
          weatherIconContainer, weatherInfoDescriptionContainer, tempMinMaxContainer,
        );
        mainContainerBottomChild.append(imgContainer, weatherDescriptionContainer);
        // mainContainerTopChild.insertBefore(toggleContainer, mainContainerTopChild.childNodes[2]);
        mainInfoContainer.insertBefore(toggleContainer, mainInfoContainer.childNodes[1]);
      }
      weatherDescriptionContainer.style.display = 'flex';
      input.value = '';
    }
    ,
  );
});
DomManipulation.enterShortcut(button, input);
mainInfoContainer.append(cityNameContainer, mainWeather, mainTemp);
weatherDescriptionContainer.append(
  weatherIconContainer, weatherInfoDescriptionContainer, tempMinMaxContainer,
);
mainContainerTopChild.append(searchBarContainer, mainInfoContainer);
mainContainerBottomChild.append(imgContainer, weatherDescriptionContainer);
mainContainer.append(
  mainContainerTopChild,
  mainContainerBottomChild,
);
export default mainContainer;