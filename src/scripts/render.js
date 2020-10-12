import * as ApiCall from '../screens/giphy';

const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
mainContainer.id = 'mainContainer';
const imgContainer = document.createElement('div');
const img = document.createElement('img');
imgContainer.classList.add('img-container');
imgContainer.id = 'imgContainer';
img.id = 'imgAPI';
img.src = '#';
const baseUrl = 'https://api.giphy.com/v1/gifs/translate?api_key=';

// check on how to make the fetch return to be a promise

ApiCall.imgCreator(imgContainer, img, ApiCall.apiFetcher(baseUrl, 'code')).catch(
  (err) => console.error(err),
);
mainContainer.append(imgContainer);
export default mainContainer;