import React from 'react'
import Pokemon from './Pokemon';
import pokemons from '../data';

class Pokedex extends React.Component {
  render() {
    return (
      <Pokemon data={ pokemons[1] }/>
    );
  }
}

export default Pokedex