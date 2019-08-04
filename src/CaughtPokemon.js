import React, {Component} from 'react';



class CaughtPokemon extends Component {
    constructor(props){
        super(props);
        
        this.state= {
            caughtPokemon:0
        }
           }
    catchPokemon = () => {
        this.setState(previousState => {
            return {
                caughtPokemon: previousState.caughtPokemon + 1
            }
        })

    }
    render(){
    return (
        <div className="counter">        <p>Caug.ht {this.state.caughtPokemon} Pokemon on{ this.props.date}</p>
            <button onClick={this.catchPokemon}>Count me</button>
        </div>
    )
}}
export default CaughtPokemon;