import React from "react";
import Aux from "../../../hoc/auxs";
const Order = (props) => {
    const ingrSum = Object.keys(props.ingr).map(e => {return <li key={e}><span>{e}</span>:{props.ingr[e]}</li>})
    return(
        <Aux>
            <h2>Your Order</h2>
            <p>lorem</p>
            <ul>
                {ingrSum}
            </ul>
            <p>Total: {props.price}</p>
            <p>Continue?</p>
            <button onClick={props.continue}>Order up.</button>
            <button onClick={props.close}> Cancel</button>      
        </Aux>
    )
};
export default Order;