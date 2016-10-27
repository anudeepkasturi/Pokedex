import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

const PokemonIndex = ({pokemon, children}) => {
  return (
    <div className="main-container">
      <aside>
        <ul>
          {
            pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke}/> )
          }
        </ul>
      </aside>
      <main>
        { children }
      </main>
    </div>
  );
};

export default PokemonIndex;
