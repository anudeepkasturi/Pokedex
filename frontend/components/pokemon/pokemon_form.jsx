import React from 'react';
import { merge } from 'lodash';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        image_url: '/assets/pokeball.png',
        poke_type: '',
        attack: 0,
        defense: 0,
        moves: [],
        items: []
      }
    };
    this.update = this.update.bind(this);
    this.handleAddMove = this.handleAddMove.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => {
      let newValue = merge({}, this.state.form);
      newValue[property] = e.target.value;
      this.setState({form: newValue});
    };
  }

  handleAddMove(e) {
    e.preventDefault();
    const newMove = this.refs.addMoveInput.value;
    if (newMove !== '' && !this.state.form.moves.includes(newMove)) {
      this.addMove(newMove);
    }
  }

  addMove(move) {
    let newState = merge({}, this.state.form);
    let moves = newState.moves;
    moves.push(move);
    this.setState({form: newState}, () => {
      this.refs.addMoveInput.value = '';
    });
  }

  removeMove(move) {
    return e => {
      e.preventDefault();
      let newState = merge({}, this.state.form);
      let moves = newState.moves;
      const idx = moves.indexOf(move);
      moves.splice(idx, 1);
      this.setState({form: newState});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPokemon(this.state.form);
  }

  render () {
    const TYPES = [
      "fire",
      "electric",
      "normal",
      "ghost",
      "psychic",
      "water",
      "bug",
      "dragon",
      "grass",
      "fighting",
      "ice",
      "flying",
      "poison",
      "ground",
      "rock",
      "steel"
    ];
    const formVal = JSON.stringify(this.state.form);
    return (
      <div className="pokemon-detail">
        <h3>Create a New Pokemon</h3>
        <form onSubmit={this.handleSubmit}>
          <section>
            <label htmlFor="name">Name: </label>
            <input id="name" type="text" onChange={this.update('name')} />
          </section>
          <section>
            <label htmlFor="image_url">Image URL: </label>
            <input
              id="image_url" type="text"
              value={this.state.form.image_url}
              onChange={this.update('image_url')} />
          </section>
          <section>
            <label htmlFor="poke_type">Type: </label>
            <select id="poke_type" onChange={this.update('poke_type')} defaultValue={this.state.form.poke_type} >
              <option value="" disabled="true" >Select</option>
              {TYPES.map((type, idx) => <option key={idx} value={type} >{type}</option>)}
            </select>
          </section>
          <section>
            <label htmlFor="attack">Attack: </label>
            <input id="attack" type="number" onChange={this.update('attack')} />
          </section>
          <section>
            <label htmlFor="defense">Defense: </label>
            <input id="defense" type="number" onChange={this.update('defense')} />
          </section>
          <section>
            <label>Moves:</label>
            <ul>
              {
                this.state.form.moves.map((move, idx) => (
                  <li key={idx}>{move} <button onClick={this.removeMove(move)}>x</button></li>
                ))
              }
            </ul>
          </section>
          <section>
            <label htmlFor="new-move">Add Move: </label>
            <input id="new-move" type="text" ref="addMoveInput"/>
            <button id="add-move" onClick={this.handleAddMove}>Add Move</button>
          </section>
          <button type="submit">Create</button>

        </form>
        {formVal}
      </div>
    );
  }
}

export default PokemonForm;
