import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

export interface Ingredients {
    [key:string] :number
}

type BurgerProps = {
    children?: React.ReactNode;// 👈️ type children
    ingredients: Ingredients | null
  };


const burger = (props: BurgerProps) => {
    let trasnformedIngredients = Object.keys(props.ingredients!)
    .map(igKey => {
        return [...Array(Math.max(0, props.ingredients![igKey]))].map((_, i) => {
            return <BurgerIngredient key = {igKey + i} type = {igKey} />
        });
    })
    .reduce((arr, el) =>{
        return arr.concat(el)
    });
    if (trasnformedIngredients.length === 0) {
        trasnformedIngredients = [<p>Please start adding Ingredients</p>] 
    }
    return(
        <div className = {classes.Burger}>
            <BurgerIngredient type = "bread-top"/>
            {trasnformedIngredients}
            <BurgerIngredient type = "bread-bottom"/>
        </div>
    );
};

export default burger;