import * as actionsTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
import { UpdatedIngredientInterface } from "../utility";
import { Reducer } from "react";
import { Action, AnyAction } from "redux";
import { IngredientsType } from "../../types";

export type InitialStateInterface = {
  loading: boolean;
  ingredients: IngredientsType | null;
  totalPrice: number;
  error: boolean;
  // burgerBuilderReducer ?:any
  building: boolean;
};

const initialState: InitialStateInterface = {
  ingredients: null,
  totalPrice: 0,
  error: false,
  loading: false,
  building: false,
};

const INGREDIENT_PRICES: IngredientsType = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const addIngredient = (state: InitialStateInterface, action: any) => {
  const updatedIngredient: UpdatedIngredientInterface = {
    [action.ingredientName]: state.ingredients![action.ingredientName] + 1,
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true,
  };
  return updateObject(state, updatedState);
};
const removeIngredient = (state: InitialStateInterface, action: any) => {
  const updatedIngredient: UpdatedIngredientInterface = {
    [action.ingredientName]: state.ingredients![action.ingredientName] - 1,
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    building: true,
  };
  return updateObject(state, updatedState);
};

const setIngredients = (state: InitialStateInterface, action: any) => {
  return updateObject(state, {
    ingredients: action.ingredients,
    totalPrice: 0,
    error: false,
    building: true,
  });
};

const fetchingIngredientsFailed = (
  state: InitialStateInterface,
  action: any
) => {
  return updateObject(state, {
    error: true,
  });
};

const reducer: Reducer<InitialStateInterface | undefined, AnyAction> = (
  state: InitialStateInterface = initialState,
  action: any
) => {
  switch (action.type) {
    case actionsTypes.ADD_INGREDIENT:
      return addIngredient(state, action);
    case actionsTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case actionsTypes.SET_INGREDIENTS:
      return setIngredients(state, action);
    case actionsTypes.FETCH_INGREDIENTS_FAILED:
      return fetchingIngredientsFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
