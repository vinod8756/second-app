import React, { Component } from 'react'
import Burger from '../commponent/burger/burger'
import Aux from '../hoc/Auxilary'
import Buildcontrol from '../buildcontrol/Buildcontrol'

const INGREDIENTS_PRICES = {
    meat : 1.7,
    cheese :1,
    salad : 1.2
}


class Burgerbuilder extends Component {

state = {
    ingredient : {
        meat : 0,
        cheese : 0,
        salad : 0
    },

    totalprice : 4,
    nothing :""
  
}


AddingredientHandler = (type) => {
    const newcount = this.state.ingredient[type] + 1 ;
    
    const updatedingredient = {
        ...this.state.ingredient
    };
    updatedingredient[type] = newcount;


    console.log(this.state.totalprice);
 
    this.setState({ ingredient : newcount });

    console.log ("logging ingredients".concat(this.state.ingredient)  )

}



removeingredientHandler = (type) => {
    let oldcount = this.state.ingredient[type];
    let newcount = oldcount - 1 ;
    console.log(this.state.totalprice)

    if (oldcount <= 0) {
        return;
    }

    const updatedingredient = {
        ...this.state.ingredient
    };
    updatedingredient[type] = newcount;

    this.setState({ ingredient:newcount });

}

    render () {
        return (
            <Aux>
            <Burger
            ingredient = {this.state.ingredient}
            />
            <Buildcontrol
            addingredient = {this.AddingredientHandler}
            remover  = {this.removeingredientHandler} />
            </Aux>
        )
        
    }
}

export default Burgerbuilder;