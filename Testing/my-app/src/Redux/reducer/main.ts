import React from 'react';
import * as actionTypes from '../actions/actionsTypes'
import { initialState } from '../store/store';

export const counterReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.ADD_INT: return {...state, counter: state++}
        case actionTypes.REDUCE_INT: return {...state, counter: state--}
        case actionTypes.RESEET_INT: return {...state, counter: 0}
        default: return state
    }
}