import { fetchAllPokemon, fetchPokemon } from '../util/api_util';
import {
  REQUEST_ALL_POKEMON,
  REQUEST_POKEMON,
  CREATE_POKEMON,
  receiveAllPokemon,
  receivePokemon,
  createPokemon,
  receiveNewPokemon
}
  from '../actions/pokemon_actions';

const PokemonMiddleware = ({ dispatch }) => next => action => {

  const receiveAllPokemonSuccess = data => dispatch(receiveAllPokemon(data));
  const pokemonSuccess = data => {
    return dispatch(receivePokemon(data));
  };
  const newPokemonSuccess = data => dispatch(receiveNewPokemon(data));

  switch(action.type) {
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon(receiveAllPokemonSuccess);
      return next(action);
    case REQUEST_POKEMON:
      fetchPokemon(action.pokemonId, pokemonSuccess);
      return next(action);
    case CREATE_POKEMON:
      createPokemon(action.pokemon, newPokemonSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
