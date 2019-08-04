import React, {Component} from 'react';

class Logo extends Component {
    logWhenClicked =()=>{
        alert("Hello World")
    }
    render(){
    return(
    
        <header>
            <h1>Welcome to the {this.props.appName}</h1>
            <img onClick={this.logWhenClicked }src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png' alt="" />
        </header>
    )
}};
export default Logo;
