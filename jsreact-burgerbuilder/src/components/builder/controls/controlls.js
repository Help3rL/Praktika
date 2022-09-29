import React from "react";
import Control from "./control/control";

const controlsList =[
    {label: "Patty",type: "patty"},
    {label: "Tomato",type: "tomato"},
    {label: "Cheese",type: "cheese"},
    {label: "Bacon",type: "bacon"},
]

const controlls = (props)=>(
    <div className='burger-controlls'>
        <p>Price: {props.price.toFixed(2)} €</p>
        {controlsList.map(ctrl => (
            <Control 
                key={ctrl.label} 
                label={ctrl.label} 
                addINGR={() => props.addIngr(ctrl.type)} 
                removeINGR={() => props.removeIngr(ctrl.type)}
            />
        ))}
        <button disabled={!props.purch} onClick={props.click}>Order</button>
    </div>
);
export default controlls;