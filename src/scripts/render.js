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

ApiCall.apiFetcher(baseUrl, 'pug').then((resolve) => {
  console.log(resolve);
  // ApiCall.imgCreator(imgContainer, img, resolve);
});
mainContainer.append(imgContainer);
export default mainContainer;