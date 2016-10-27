import { fetchAllPokemon, fetchPokemon } from '../util/api_util';
import { REQUEST_ALL_POKEMON, REQUEST_POKEMON, receiveAllPokemon, receivePokemon }
  from '../actions/pokemon_actions';

const PokemonMiddleware = ({ dispatch }) => next => action => {

  const receiveAllPokemonSuccess = data => dispatch(receiveAllPokemon(data));
  const pokemonSuccess = data => {
    return dispatch(receivePokemon(data));
  };

  switch(action.type) {
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon(receiveAllPokemonSuccess);
      return next(action);
    case REQUEST_POKEMON:
      fetchPokemon(action.pokemonId, pokemonSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
