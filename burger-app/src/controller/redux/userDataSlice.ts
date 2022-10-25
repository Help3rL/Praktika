import { createSlice } from "@reduxjs/toolkit";
import { initialUserData } from './userdata'

const initialState= {
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
    userLogState: false,
    uid: "",
  }
export const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {

    }
})
