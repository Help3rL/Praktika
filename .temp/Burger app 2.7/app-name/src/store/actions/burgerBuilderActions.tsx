import * as actionTypes from './actionTypes'
import { IngredientsType } from '../../containers/BurgerBuilder/BurgerBuilder'
import axios from '../../axios-orders'
import { Action } from '@reduxjs/toolkit'

export interface ActionsInterface {
    type: string
    ingredientName?: string
}

interface setIngredientsInterface extends ActionsInterface {
    ingredients : IngredientsType
}

export const addIngredient = (name:string):ActionsInterface => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngredient = (name:string):ActionsInterface => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const setIngredients = (ingredients:IngredientsType):setIngredientsInterface => {
    return {
        type:actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

export const initIngredients = () => {
    return (dispatch:Action) => {
        axios.get('https://burger-app-12de6-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json')
        .then(response => {
          dispatch (setIngredients(response.data))
        }).catch (error => {
            dispatch(fetchIngredientsFailed())
        })
    }
}