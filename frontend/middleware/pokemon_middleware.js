import { fetchAllPokemon, fetchPokemon, createPokemon } from '../util/api_util';
import {
  REQUEST_ALL_POKEMON,
  REQUEST_POKEMON,
  CREATE_POKEMON,
  receiveAllPokemon,
  receivePokemon,
  receiveNewPokemon
}
  from '../actions/pokemon_actions';
import { receiveErrors } from '../actions/error_actions';
import { hashHistory } from 'react-router';

const PokemonMiddleware = ({ dispatch }) => next => action => {

  const receiveAllPokemonSuccess = data => dispatch(receiveAllPokemon(data));
  const pokemonSuccess = data => {
    return dispatch(receivePokemon(data));
  };

  const receiveNewPokemonSuccess = pokemon => {
    dispatch(receiveNewPokemon(pokemon));
    hashHistory.push(`/pokemon/${pokemon.id}`);
  };

  const receiveNewPokemonError = res => {
    dispatch(receiveErrors(res.responseJSON));
  };

  switch(action.type) {
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon(receiveAllPokemonSuccess);
      return next(action);
    case REQUEST_POKEMON:
      fetchPokemon(action.pokemonId, pokemonSuccess);
      return next(action);
    case CREATE_POKEMON:
      createPokemon(action.pokemon,
        receiveNewPokemonSuccess, receiveNewPokemonError);
      return next(action);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
