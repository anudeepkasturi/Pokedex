import React from 'react';
import { withRouter } from 'react-router';

const PokemonIndexItem = ({pokemon, router}) => {
  const handleClick = url => e => router.replace(url);

  return (
    <li
      className="pokemon-index-item"
      onClick={handleClick(`/pokemon/${pokemon.id}`)}>
      <img src={pokemon.image_url} />
      {pokemon.name}
    </li>
  );
};

export default withRouter(PokemonIndexItem);
