import React, { JSXElementConstructor } from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'salad', type: 'salad'},
    {label: 'bacon', type: 'bacon'},
    {label: 'cheese', type: 'cheese'},
    {label: 'meat', type: 'meat'}
];

export interface buildControlsInterface {
    ingredientAdded(argument:string): any;
    ingredientRemoved(argument:string): any;
    ordered(argument:boolean|React.MouseEvent<HTMLElement>) : void ;
    price: number;
    purchaseable: boolean;
    isAuth: boolean | null
    // disabled: any;
}
 
const buildControls = (props:buildControlsInterface) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
            key = {ctrl.label}
            label = {ctrl.label} 
            added = {() =>props.ingredientAdded(ctrl.type)}
            removed = {() => props.ingredientRemoved(ctrl.type)}
            // disabled = {props.disabled[ctrl.type]}
            />
        ))}
        <button className = 
            {classes.OrderButton}
            disabled = {!props.purchaseable}
            onClick = {props.ordered}
        >{props.isAuth? 'ORDER NOW' : " SIGN UP TO ORDER"}</button>
    </div>
);

export default buildControls;