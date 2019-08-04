import React, {Component} from 'react';

class Logo extends Component {
    render(){
    return(
    
        <header>
            <h1>Welcome to the {this.props.appName}</h1>
            <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png' alt="" />
        </header>
    )
}};
export default Logo;
