import React, { Component } from 'react';

class BestPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonNames: null,
      isLoading: true
    };
  }
  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokedex/1/')
      .then(res => res.json())
      .then(data => {
        this.setState({
          pokemonNames: [
            data.pokemon_entries[0].pokemon_species.name,
            data.pokemon_entries[3].pokemon_species.name,
            data.pokemon_entries[6].pokemon_species.name
          ],
          isLoading: false
        });
      });
  }
  render() {
    if (this.state.isLoading) {
      return <span>Loading...</span>;
    } else {
      return (
        <div>
          <p>My favourite Pokemon is</p>
          {this.state.pokemonNames}
        </div>
      );
    }
  }
}
export default BestPokemon;
