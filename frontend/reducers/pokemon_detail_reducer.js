import { RECEIVE_POKEMON, RECEIVE_NEW_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const defaultPokemon = {
  name: '',
  image_url: '',
  poke_type: '',
  attack: 0,
  defense: 0,
  moves: [],
  items: []
};

export default (state = defaultPokemon, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_POKEMON:
      return action.pokemon;
    case RECEIVE_NEW_POKEMON:
      return merge(defaultPokemon, action.pokemon);
    default:
      return state;
  }
};
