import React from 'react'
import './Buildcontrol.css'
import Controlpanel from './controlpanel/controlpanel';

const controls = [
    {label:"Meat", type : 'meat'},
    {label:"Salad", type : 'salad'},
    {label:"Cheese", type : 'cheese'}
]

const Buildcontrol = (props) => (
    <div className = "Buildcontrol">
    {controls.map(ctrl => (
          <Controlpanel 
         key = {ctrl.label}
         label = {ctrl.label} 
         added = {() => props.addingredient(ctrl.type)}
         remove = {() => props.remover(ctrl.type)}/>
    )
       
    )}
</div>
);
 



export default Buildcontrol;


