import React, { Component } from 'react';
import Reducer from './reducer';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

const ingredients = configureStore({
    reducer:{

    }
})

const userAccount = configureStore({
    reducer:{
        userName: Reducer,
        userSurname: Reducer,
        usercity: Reducer,
        userzip: Reducer,
        useraddress: Reducer,
        userPhoneNumber: Reducer,
        userEmail: Reducer,
        userOrders: Reducer,
        userToken: Reducer
    }
})