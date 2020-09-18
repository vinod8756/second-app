import React, { Component } from 'react';
import  './burgeringredient.css';
import PropTypes from 'prop-types';



class Burgeringredients extends Component {
    render () {
         var ingredient = null;
         console.log("ingredient selected".concat( this.props.type))

        switch (this.props.type)  {

            
    
                case("bread-bottom"):
                   ingredient = <div className = 'BreadBottom'></div>;
                   console.log("bread bottom")
                break;
    
                case ("bread-top"):
                    ingredient = <div className = 'BreadTop'>
                    <div className = 'Seeds1'></div>
                    <div className = 'Seeds2'></div>
                    </div>;
                    console.log("bread top")
                break;
    
                case ('meat'):
                    ingredient = <div className = 'Meat'></div>;
                    console.log("meat")
                    break;
    
                case ('salad'):
                    ingredient = <div className = 'Salad'></div>;
                    console.log("salad")
                    break;
    
                case('cheese'):
                    ingredient = <div className = 'Cheese'></div>;
                    console.log("cheese")
                    break;  
                 
                default :    
                    ingredient = null;
                    console.log("default")

    };
    

    return ingredient;
   
    };

};


Burgeringredients.PropType = {
    type: PropTypes.string.isRequired
    
};



export default Burgeringredients;
