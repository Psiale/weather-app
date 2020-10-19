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

const weatherIconGetter = async (iconCode) => {
  const response = await fetch(`http://openweathermap.org/img/wn/${iconCode}@2x.png`);
  console.log(response.url);
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
  console.log(weather);
  return weather;
};
const promiseToJson = async (baseUrl, searchQuery, units = 'imperial') => {
  const apiKey = process.env.WEATHER_API;
  const response = await fetch(`${baseUrl}q=${searchQuery}&units=${units}&appid=${apiKey}`, { mode: 'cors' });
  const data = await response.json();
  console.log(data);
  return weatherObjectConstructor(data);
};
export {
  apiFetcher, imgCreator, promiseToJson, weatherObjectConstructor, iconGetter, weatherIconGetter,
};
