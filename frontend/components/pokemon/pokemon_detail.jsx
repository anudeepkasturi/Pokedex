import React from 'react';
import Item from '../items/item';

const PokemonDetail = ({pokemon, children}) => {

  let moves;
  if (pokemon.moves) {
    console.log(pokemon);
    moves = pokemon.moves.join(' ');
  }

  let items;
  let template = (
    <p>loading...</p>
  )
  if(pokemon.items) {
    items = pokemon.items;
    template = (
      <ul className="toy-list">
        {pokemon.items.map((item) => <Item key={item.name} item={item}/>)}
      </ul>
    )
  }

  return (
    <div className="pokemon-detail">
      <img src={pokemon.image_url}></img>
      <h2>{pokemon.name}</h2>
      <h4>Type: {pokemon.type}</h4>
      <h4>Attack: {pokemon.attack}</h4>
      <h4>Defense: {pokemon.defense}</h4>
      <h4>Moves: {moves}</h4>

      <section className="toys">
  			<h3>Items</h3>
  			{template}
  		</section>

      {children}
    </div>
  );
};

export default PokemonDetail;
