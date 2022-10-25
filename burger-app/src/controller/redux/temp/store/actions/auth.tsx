import React from 'react'

// import axios, { AxiosResponse } from 'axios'
// import * as actionTypes from './actionTypes'
// import { AxiosError } from 'axios'

// export interface authData {
//     email: string
//     password: string
//     returnSecureToken: boolean
// }

// export const authStart = () => {
//     return{
//         type: actionTypes.AUTH_START
//     }
// }

// export const authSuccess = (token:string, userId:string|null) => {
//     return {
//         type: actionTypes.AUTH_SUCCESS,
//         idToken: token,
//         userId: userId
//     }
    
// }

// export const authFail = (error:AxiosError) => {
//     return {
//         type: actionTypes.AUTH_FAIL,
//         error: error
//     }
// }

// export const logout = () => {
//     localStorage.removeItem('token')
//     localStorage.removeItem('expirationDate')
//     localStorage.removeItem('userId')
//     return {
//         type: actionTypes.AUTH_LOGOUT
//     }
// }

// export const checkAuthTimeout = (expirationTime:any) => {
//     return (dispatch:any) => {
//         setTimeout (() => {
//             dispatch (logout())
//         }, expirationTime * 1000)
//     }
// }


// // Funkcija kuri patikrina ar useris valid
// // Asinchronine funkcija, react-thunk

// export const auth = (email:string, password:string, isSignup:boolean) => {
//     return (dispatch:any) => {
//         dispatch(authStart())
//         const authData:authData = {
//             email: email,
//             password: password,
//             returnSecureToken: true
//         }
//         let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB7kLNSJItcJ118iPpxhizn8heoppT1IdQ'
//         if(!isSignup) {
//             url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB7kLNSJItcJ118iPpxhizn8heoppT1IdQ'
//         }
//         axios.post(url, authData)
//             .then( (response:AxiosResponse) => {
//                 console.log(response);
//                 const expirationDate:any = new Date (new Date ().getTime() + response.data.expiresIn * 1000)
//                 localStorage.setItem('token' , response.data.idToken);
//                 localStorage.setItem('expirationDate', expirationDate)
//                 localStorage.setItem('userId', response.data.userId)
//                 dispatch(authSuccess(response.data.idToken, response.data.localId))
//                 dispatch (checkAuthTimeout(response.data.expiresIn))
//             })
//             .catch( (err) => {
//                 console.log(err);
//                 dispatch(authFail(err.response?.data.error))
//             })
//     }
// }

// export const setAuthRedirectPath = (path:string) => {
//     return {
//         type: actionTypes.SET_AUTH_REDIRECT_PATH,
//         path: path
//     }
// }

// export const authCheckState = () => {
//     return (dispatch:any) => {
//         const token = localStorage.getItem('token')
//         if (!token) {
//             dispatch(logout());
//         }else {
//             const expirationDateUnparsed = localStorage.getItem('expirationDate') ;
//             const expirationDateParsed = expirationDateUnparsed ? new Date(expirationDateUnparsed) : new Date();
//             if (expirationDateParsed <= new Date()) {
//                 dispatch (logout())
//             }else {
//                 const userId = localStorage.getItem('userId') 
//                 dispatch(authSuccess(token, userId));
//                 dispatch(checkAuthTimeout((expirationDateParsed.getTime() - new Date ().getTime()) /1000 ))
//             }
//         }
//     }
// }