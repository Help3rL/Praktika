import React, { Component } from 'react';
import * as Reducer from './reducer';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

const ingredients = configureStore({
    reducer:{

    }
})

// const userAccount = configureStore({
    // reducer: {
        // userName: Reducer.userNameReducer,
        // userSurname: Reducer.userSurnameReducer,
        // usercity: Reducer.userCityReducer,
        // userzip: Reducer.userZipReducer,
        // useraddress: Reducer.userAddressReducer,
        // userPhoneNumber: Reducer.userPhoneNumberReducer,
        // userEmail: Reducer.userEmailReducer,
        // userOrders: Reducer.userOrdersReducer,
        // userToken: Reducer.userTokenReducer
    // }
// })