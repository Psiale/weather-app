
async function apiFetcher(baseUrl, searchQuery) {
  const apiKey = process.env.GIPHY_KEY;
  const response = await fetch(`${baseUrl}${apiKey}&s=${searchQuery}`, { mode: 'cors' });
  const data = await response.json();
  return data.data.images.original.url;
}

// In order to make the fetching work I:
// changed the structure of the function to be async await instead of then()
// I also changed the ImgCreator function to be async and await the src
// (which is the apiFetcher function)

const imgCreator = async (container, image, src) => {
  image.src = await src;
  return container.append(image);
};

export { apiFetcher, imgCreator };