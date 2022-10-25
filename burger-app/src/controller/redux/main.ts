import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { connect } from 'react-redux';
import userDataReducer from './userdata'
const userData = configureStore({
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

