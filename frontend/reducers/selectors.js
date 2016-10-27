import { values } from 'lodash';

export const selectAllPokemon = state => {
  return values(state.pokemon);
};

export const selectPokemonItem = ({ pokemonDetail }, itemId) => {
  const foundItem = pokemonDetail.items.find(item => item.id === itemId);
  return foundItem || {};
};
