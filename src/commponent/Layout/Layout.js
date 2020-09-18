import React from 'react'
import Aux from '../../hoc/Auxilary'
import './layout.css'

const Layout = (props) => (
    <Aux>
    <div className = "Content">toolbar sidedraw backdrop</div>
   <main>{props.children} </main>
   </Aux>
);

export default Layout;  
    
