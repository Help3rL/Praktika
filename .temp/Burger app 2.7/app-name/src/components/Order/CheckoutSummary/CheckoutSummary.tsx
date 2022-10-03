import React from 'react'
import Burger from '../../burger/Burger'
import Button from '../../UI/Button/Button'
import classes from '../CheckoutSummary/CheckoutSummary.module.css'
import { IngredientsType } from '../../../containers/BurgerBuilder/BurgerBuilder'
// pakeist ingredients interfeisa


export interface checkoutSummary {
    ingredients : IngredientsType | null
    checkoutCancelled : any; // Kadangi nezinom kokie tiksliai propsai bus
    checkoutContinued : any;
}

const checkoutSummary = (props:checkoutSummary) => {
    return (
        <div className = {classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style = {{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                btnType = "Danger" 
                clicked = {props.checkoutCancelled}>CANCEL</Button>
            <Button 
                btnType = "Success" 
                clicked = {props.checkoutContinued}>CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary;