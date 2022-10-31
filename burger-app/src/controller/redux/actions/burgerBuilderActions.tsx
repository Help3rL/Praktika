import { collection, getFirestore } from 'firebase/firestore'
import { StaticIngrData } from '../../types'
import * as actionTypes from './actionTypes'

export interface ActionsInterface {
    type: string
    ingredientName?: string
}

interface setIngredientsInterface extends ActionsInterface {
    ingredients : StaticIngrData
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

export const setIngredients = (ingredients:StaticIngrData):setIngredientsInterface => {
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
    return () => {
        const db = getFirestore()
        const coll = collection(db, 'burgerData/Ingredients/ingredients')
        return coll
    }
}