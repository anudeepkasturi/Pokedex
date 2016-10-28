import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import ErrorsContainer from '../errors/errors_container';

const PokemonIndex = ({pokemon, children}) => {
  return (
    <div className="main-container">
      <ErrorsContainer />
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
