import React from 'react';
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {UserState} from '../../types'
import { stat } from 'fs';

const initialState:UserState = {
    userName: '',
    userSurname: '',
    userAddress: '',
    userZip: 0,
    userEmail: '',
    userOrders: [],
    userCity: '',
    userToken: '',
    userPhoneNumber: 0,
    userlogoutTime: 0
}


export const master = createSlice({
    name: 'master',
    initialState,
    reducers: {

        getuserData: (state, action:PayloadAction<UserState>) => {
            state = action.payload
        }
    }
})

export default master.reducer