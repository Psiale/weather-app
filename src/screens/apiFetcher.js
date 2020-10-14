import Weather from '../classes/weatherObject';

async function apiFetcher(baseUrl, searchQuery) {
  const apiKey = process.env.GIPHY_KEY;
  const response = await fetch(`${baseUrl}q=${searchQuery}&appid=${apiKey}`, { mode: 'cors' });
  const data = await response.json();
  return data.data.images.original.url;
}
// In order to make the fetching work I:
// changed the structure of the function to be async await instead of then()
// I also changed the ImgCreator function to be async and await the src
// (which is the apiFetcher function)
const iconGetter = async (iconCode) => {
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
  apiFetcher, imgCreator, promiseToJson, weatherObjectConstructor, iconGetter,
};