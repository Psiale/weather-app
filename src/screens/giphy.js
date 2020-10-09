const imgContainer = document.createElement('div');
const img = document.createElement('img');
imgContainer.classList.add('img-container');
imgContainer.id = 'imgContainer';
img.id = 'imgAPI';
imgContainer.append(img);
const baseUrl = 'https://api.giphy.com/v1/gifs/translate?api_key='

function apiFetcher (searchQuery) {
    const apiKey = 'NugrROQQ4DCqBqNviYzgvDib6kvifqf7';
    fetch(`${baseUrl}${apiKey}&s=${searchQuery}`)
    .then((response) => console.log(response.json()));
}

const imgCreator = (src) => {

}

export { apiFetcher }