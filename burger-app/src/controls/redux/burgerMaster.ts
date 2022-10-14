import * as actionTypes from "../actionTypes";
import { updateObj, UpdatedIngredientInterface } from "../utility";
import {InitialStates} from '../../types'
const addIngr = (state: any, action: any) => {
  const updatedIngr: any = {
    [action.ingrName]: state.ingr[action.ingrName] + 1,
  };
  const updatedIngrs = updateObj(state.ingr, updatedIngr);
  const updatedstate: any = {
    ingr: updatedIngrs,
    // totalPrice: state.totalPrice + getBuilderData?.price[action.ingrName],
  };
  return updateObj(state, updatedstate);
};
const removeIngr = (state: any, action: any) => {
  const updatedIngr: any = {
    [action.ingrName]: state.ingr[action.ingrName] - 1,
  };
  const updatedIngrs = updateObj(state.ingr, updatedIngr);
  const updatedstate: any = {
    ingr: updatedIngrs,
    // totalPrice: state.totalPrice + getBuilderData?.price[action.ingrName],
  };
  return updateObj(state, updatedstate);
};

const setIngr = (state: any, action: any) => {
  const newState: any = {
    ingr: action.ingr,
    totalPrice: 4,
    err: false,
  };
  return updateObj(state, newState);
};
const fetchFailiure = (state: any, _action: any) => {
  const error: any = { error: true };
  return updateObj(state, error);
};

const reducer = (state:InitialStates, action: any) => {
  switch (action.type) {
    case actionTypes.ADD_INGR:
      return addIngr(state, action);
    case actionTypes.REMOVE_INGR:
      return removeIngr(state, action);
    case actionTypes.SET_INGR:
      return setIngr(state, action);
    case actionTypes.FETCH_FAILIURE:
      return fetchFailiure(state, action);
    default:
      return state;
  }
};
export default reducer;
