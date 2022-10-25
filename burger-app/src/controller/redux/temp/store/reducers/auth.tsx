import React from 'react'
// import * as actionTypes from '../actions/actionTypes'
// import { updateObject,  UpdatedIngredientInterface } from '../../shared/utility'
// import { AxiosError } from 'axios'
// import { Reducer } from 'react'
// import { Action, AnyAction } from 'redux'

// export interface AuthReducerInitialState {
//     token : null | string
//     userId: null | string
//     error : null | AxiosError
//     loading: boolean
//     authReducer ?:any
//     authRedirectPath : string
// }


// const initialState :AuthReducerInitialState = {
//     token : null, 
//     userId: null,
//     error : null,
//     loading: false,
//     authRedirectPath : '/'
// }

// const authStart = (state:AuthReducerInitialState, action: UpdatedIngredientInterface) => {
//     return updateObject (state, {error : null, loading : true})
// }
// const authSucces = (state:AuthReducerInitialState, action: UpdatedIngredientInterface) => {
//     return updateObject (state, {
//         token: action.idToken,
//         userId: action.userId,
//         error : null,
//         loading : false
//     })
// }

// const authFail = (state:AuthReducerInitialState, action: UpdatedIngredientInterface) => {
//     return updateObject (state , {
//         error: action.error,
//         loading: false
//     })
// }
// const authLogout = (state:AuthReducerInitialState, action:UpdatedIngredientInterface) => {
//     return updateObject (state, {token:null,userId: null})
// }

// const setAuthRedirectPath = (state:AuthReducerInitialState ,action:UpdatedIngredientInterface) => {
//     return updateObject  (state, { authRedirectPath: action.path})
// }


// const reducer:Reducer<AuthReducerInitialState | undefined, AnyAction> = (state:AuthReducerInitialState = initialState, action: UpdatedIngredientInterface) => {
//     switch (action.type) {
//         case actionTypes.AUTH_START: return authStart (state, action)
//         case actionTypes.AUTH_SUCCESS: return authSucces (state, action)
//         case actionTypes.AUTH_FAIL: return authFail (state, action)
//         case actionTypes.AUTH_LOGOUT: return authLogout (state, action)
//         case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state, action)
//         default: 
//             return state
//     }
// }

// export default reducer