import Weather from '../classes/weatherObject';

async function apiFetcher(baseUrl, searchQuery) {
  const apiKey = process.env.GIPHY_KEY;
  const response = await fetch(`${baseUrl}q=${searchQuery}&appid=${apiKey}`, { mode: 'cors' });
  const data = await response.json();
  return data.data.images.original.url;
}
const iconGetter = (iconCode, array) => {
  // add the clause for else == haze
  const result = array.filter((weather) => weather.weatherName === iconCode);
  if (result.length > 0) {
    // console.log(result.length > 0);
    return result[0].weatherImage;
  }
  return array[6].weatherImage;
};

const weatherIconGetter = async (iconCode, element) => {
  const response = await fetch(`‘https://cors-anywhere.herokuapp.com/http://openweathermap.org/img/wn/${iconCode}@2x.png`);
  if (iconCode === '13d' || iconCode === '50d') {
    element.style.filter = 'invert(1)';
  } else {
    element.style.filter = 'none';
  }
  return response.url;
};

const imgCreator = async (container, image, src) => {
  image.src = await src;
  return container.append(image);
};
const weatherObjectConstructor = async (apiData) => {
  const weatherObject = await apiData;
  const weather = Weather(
    await weatherObject.weather[0].main,
    await weatherObject.weather[0].description,
    await weatherObject.main.temp,
    await weatherObject.main.temp_min,
    await weatherObject.main.temp_max,
    await weatherObject.weather[0].icon,
  );
  return weather;
};

const weatherObjectError = async (data) => {
  const response = await data;
  const weather = Weather(
    await response.message,
    '',
    '',
    '',
    '',
    '',
  );
  return weather;
};

const promiseToJson = async (baseUrl, searchQuery, units = 'imperial') => {
  const apiKey = process.env.WEATHER_API;
  const response = await fetch(`${baseUrl}q=${searchQuery}&units=${units}&appid=${apiKey}`, { mode: 'cors' });
  const data = await response.json();
  if (data.cod === '404') return weatherObjectError(data);
  return weatherObjectConstructor(data);
};

export {
  apiFetcher, imgCreator, promiseToJson, weatherObjectConstructor, iconGetter, weatherIconGetter,
};
