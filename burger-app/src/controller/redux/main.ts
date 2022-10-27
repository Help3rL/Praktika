import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import userDataReducer from './userdata'
export const userData = configureStore({
    reducer: {
        userName: userDataReducer.usernameReducer,
        userSurname: userDataReducer.surnameReducer,
        userAddress: userDataReducer.addressReducer,
        userZip: userDataReducer.zipReducer,
        userEmail: userDataReducer.emailReducer,
        userOrders: userDataReducer.ordersReducer,
        userCity: userDataReducer.cityReducer,
        userToken: userDataReducer.tokenReducer,
        userPhoneNumber: userDataReducer.telNumberReducer,
        userlogoutTime: userDataReducer.logoutReducer,
        userLogState: userDataReducer.logstateReducer,
        uid: userDataReducer.uidReducer
    }
})
export type userDataRoot = ReturnType<typeof userData.getState>
export type userDataAppDispatch = typeof userData.dispatch

