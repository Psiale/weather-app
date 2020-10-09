
async function apiFetcher(baseUrl, searchQuery) {
  const apiKey = process.env.GIPHY_KEY;
  await fetch(`${baseUrl}${apiKey}&s=${searchQuery}`, { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => {
      console.log(response.data.images.original.url);
      return response.data.images.original.url;
    }).catch((err) => console.log(err));
}

// make a function async to have a const response = await fetch(nextPokemons);
// const data = await response.json();


const imgCreator = (container, image, src) => {
  console.log(src);
  image.src = src;
  return container.append(image);
};

export { apiFetcher, imgCreator };