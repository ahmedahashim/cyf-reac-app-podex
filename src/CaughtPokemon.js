import React, {Component} from 'react';



class CaughtPokemon extends Component {
    constructor(props){
        super(props);
        
        this.state= {
            caughtPokemon:0
            
        }
        console.log('constructor')
           }
    catchPokemon = () => {
        this.setState(previousState => {
            return {
                caughtPokemon: previousState.caughtPokemon + 1
            }
        })

    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    componentWillUnmount (){
        console.log('componentWillUnmount')
    }
    render(){
    return (
        <div className="counter">        <p>Caught {this.state.caughtPokemon} Pokemon on{ this.props.date}</p>
            <button onClick={this.catchPokemon}>Count me</button>
        </div>
    )
}}
export default CaughtPokemon;