import React from 'react'
import Burgeringredients from '../burgeringredients/burgeringredient';
import  './burger.css'

const Burger = (props) => { 
    console.log("ingredient".concat(props.ingredient.keys))
   let transformedingredient = Object.keys(props.ingredient)
   .map(igkey => {
    console.log("igkey".concat(igkey))
       return [...Array(props.ingredient[igkey])].map((_ , i) => {
        console.log("igkey".concat( igkey))
           return     <Burgeringredients key = {igkey + i} type = {igkey} />
       });
   })
   .reduce((Arr , el) => {
    console.log("error ".concat( el))
       return Arr.concat(el)
   }, [])
   ;
   


   if (transformedingredient === 0 ) {
    transformedingredient = <h3>PLEASE START ADDING!!</h3>
   }
 

 console.log(transformedingredient)
   

 return (
        <div className = 'Burger'>
        <Burgeringredients  type = "bread-top" />
        {transformedingredient}
        <Burgeringredients  type = "bread-bottom" />
        
        </div>
    );

}




export default Burger