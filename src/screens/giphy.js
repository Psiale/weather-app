
async function apiFetcher(baseUrl, searchQuery) {
  const apiKey = process.env.GIPHY_KEY;
  const response = await fetch(`${baseUrl}${apiKey}&s=${searchQuery}`, { mode: 'cors' });
  const data = await response.json();
  return data.data.images.original.url;
}

// make a function async to have a const response = await fetch(nextPokemons);
// const data = await response.json();


async function imgCreator(container, image, src) {
  image.src = await src;
  return container.append(image);
}

export { apiFetcher, imgCreator };