import React, {Component} from 'react';


 class BestPokemon extends Component {
    render() {
        return (
          
        <div>
            <p>My favourite Pokemon is</p>
            <ul>
                {this.props.pokemonNames.map((name, index) =>
                    <li key={index}>{name} </li>)}
            </ul>
        </div>)
}};
export default BestPokemon