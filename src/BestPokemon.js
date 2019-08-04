import React from 'react';
const BestPokemon = (props) => {


    return (
        <div>
            <p>My favourite Pokemon is</p>
            <ul>
                {props.pokemonNames.map((name, index) =>
                    <li key={index}>{name} </li>)}
            </ul>
        </div>)
};
export default BestPokemon