import React, { Component } from 'react'

import Aux from 'react-aux'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render(){
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients} />
                <BuildControls />
            </Aux>
        )
    }
}

export default BurgerBuilder