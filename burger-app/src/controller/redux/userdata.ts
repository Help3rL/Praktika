import { AsyncThunk, createReducer } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { UserState } from '../types';
import type {userDataRoot, userDataAppDispatch} from './main';

export const useAppDispatch: () => userDataAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<userDataRoot> = useSelector;

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>

type PendingAction = ReturnType<GenericAsyncThunk['pending']>
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>

export const initialUserData:UserState = {
    userName: "",
    userSurname: "",
    userAddress: "",
    userZip: 0,
    userEmail: "",
    userOrders: [],
    userCity: "",
    userToken: "",
    userPhoneNumber: 0,
    userlogoutTime: 0,
    userLogState: "neverseen",
    uid: "",
  }
const setusername = ''
const usernameReducer = createReducer(initialUserData, (builder) => {
    builder
    .addCase(setusername, (state, action) => {
        
    })
})
const surnameReducer = createReducer(initialUserData, (builder) => {
    builder
    .addCase(setusername, (state, action) => {
        
    })
})
const addressReducer = createReducer(initialUserData, (builder) => {
    builder
    .addCase(setusername, (state, action) => {
        
    })
})
const zipReducer = createReducer(initialUserData, (builder) => {
    builder
    .addCase(setusername, (state, action) => {
        
    })
})
const emailReducer = createReducer(initialUserData, (builder) => {
    builder
    .addCase(setusername, (state, action) => {
        
    })
})
const ordersReducer = createReducer(initialUserData, (builder) => {
    builder
    .addCase(setusername, (state, action) => {
        
    })
})
const cityReducer = createReducer(initialUserData, (builder) => {
    builder
    .addCase(setusername, (state, action) => {
        
    })
})
const tokenReducer = createReducer(initialUserData, (builder) => {
    builder
    .addCase(setusername, (state, action) => {
        
    })
})
const telNumberReducer = createReducer(initialUserData, (builder) => {
    builder
    .addCase(setusername, (state, action) => {
        
    })
})
const logoutReducer = createReducer(initialUserData, (builder) => {
    builder
    .addCase(setusername, (state, action) => {
        
    })
})
const logstateReducer = createReducer(initialUserData, (builder) => {
    builder
    .addCase(setusername, (state, action) => {
        
    })
})
const uidReducer = createReducer(initialUserData, (builder) => {
    builder
    .addCase(setusername, (state, action) => {
        
    })
})
export default {
    usernameReducer,
    surnameReducer,
    addressReducer,
    zipReducer,
    emailReducer,
    ordersReducer,
    cityReducer,
    tokenReducer,
    telNumberReducer,
    logoutReducer,
    logstateReducer,
    uidReducer
}