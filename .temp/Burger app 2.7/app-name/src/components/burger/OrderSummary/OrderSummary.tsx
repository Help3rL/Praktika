import React from 'react'
import Aux from '../../../hoc/Hocs'
import { IngredientsType } from '../../../containers/BurgerBuilder/BurgerBuilder';
import Button from '../../UI/Button/Button'

export interface OrderInterfaceProps {
    ingredients: IngredientsType
    purchaseCanceled(argument:string): void;
    purchaseContinued(argument:string): void;
    price:number;
}


const OrderSummary = (props:OrderInterfaceProps) => {

    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey =>{
        return <li key = {igKey}><span style = {{textTransform:'capitalize'}}> {igKey}</span>:{props.ingredients[igKey]}</li>
    })
    return(
    <Aux>
        <h3> Your Order</h3>
        <p>A deliciuos burger with the following ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button btnType = "Danger" clicked = {props.purchaseCanceled}>CANCEL</Button>
        <Button btnType = "Success" clicked = {props.purchaseContinued}>CONTINUE</Button>
    </Aux>
    )
}

export default OrderSummary;