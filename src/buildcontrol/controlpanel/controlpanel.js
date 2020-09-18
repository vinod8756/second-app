import React from 'react'
import '../controlpanel/controlpanel.css'

const Controlpanel = (props) => {
return (
    <div className = "Controlpanel">
        <div className = "Label">{props.label} </div>
        <button className = "More" onClick = {props.added}>more</button>
        <button className = "Less" onClick = {props.remove}>less</button>
    </div>
)

}

export default Controlpanel