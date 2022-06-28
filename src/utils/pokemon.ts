const POKEDEX_ENTRIES = 151;
export const getRandomPokemonId = () => {
  const pokemonId = Math.floor(Math.random() * POKEDEX_ENTRIES) + 1;

  return pokemonId;
};
