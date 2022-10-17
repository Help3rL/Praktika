import React from 'react';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {UserState} from '../types'
import { stat } from 'fs';
import { fetchCount } from '../../features/actions/counter/counterAPI';

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
    userlogoutTime: 0,
    userState: false
}

const userlogoutTimerAsync = createAsyncThunk(
    'master',
   async (logoutTimer:number) => {
        const response = await fetchCount(logoutTimer)
        return response.data
   }
)

export const master = createSlice({
    name: 'master',
    initialState,
    reducers: {
        getuserData: (state, action:PayloadAction<UserState>) => {
            state = action.payload
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase
    }
})

export default master.reducer