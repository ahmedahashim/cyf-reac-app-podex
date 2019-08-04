import React from 'react';
import Logo from "./Logo"
import BestPokemon from "./BestPokemon"
import CaughtPokemon from "./CaughtPokemon"

const logWhenClicked = () => {
  alert("Hello World")
}

function App() {
  
  return (
    <div>
      <Logo appName='Podex' onClickHandler={logWhenClicked}/>
      <BestPokemon pokemonNames= {['Squirtle', 'Bulbasaur', 'Charmander']}/>
      < CaughtPokemon date= {new Date().toLocaleDateString()}/>
    </div>
  );
}

export default App;
