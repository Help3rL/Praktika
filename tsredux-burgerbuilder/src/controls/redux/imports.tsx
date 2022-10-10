import * as actionTypes from '../actionTypes';
import axios from 'axios';

export const addIngr = (name:any) => {
    return {
        type: actionTypes.ADD_INGR,
        ingr: name
    }
}
export const removeIngr = (name:any) => {
    return{
        type: actionTypes.REMOVE_INGR,
        ingr: name
    }
}
export const setIngr = (ingr:any) => {
    return {
        type: actionTypes.SET_INGR,
        ingr
    }
}
export const fetchFailiure = () => {
    return{
        type: actionTypes.FETCH_FAILIURE
    }
}

export const initIngr = () => {
    return (dispatch:any ) => {
        axios.get("ingr.json").then(response => {
            dispatch(setIngr(response.data))
        }).catch(err => {
            dispatch(fetchFailiure())
        })
    }
}