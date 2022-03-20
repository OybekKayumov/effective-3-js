const getPokeList = async (offset) => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`,);

  const { results } = await resp.json();
  return results
};

const getPoke = async (name) => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const data = await resp.json();
  // console.log(data);
  return data;
};

export { getPokeList, getPoke };