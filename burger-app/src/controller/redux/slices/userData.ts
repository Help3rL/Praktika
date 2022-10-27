import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { user } from 'firebase-functions/v1/auth';
import { getAdditionalUserInfo, getAuth } from 'firebase/auth';
import { doc } from 'firebase/firestore';
import { db } from '../../firebase/firebase_config';
const initialState = {
    userName: "",
    userSurname: "",
    userAddress: "Test",
    userEmail: "",
    userOrders: [{}],
    userPhoneNumber: 0,
    userlogoutTime: 0,
    userLogState: false,
    uid: "",
}

const userData = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    addOrder(state, orderload:object){
        state.userOrders.push(orderload)
    },
    getUserData(state){
        const auth = getAuth();
        const user = auth.currentUser
        
        const docRef = doc(db, user?.uid)
        if (user !== null){
            state.userLogState = true;
            user.providerData.forEach(ele => console.log(ele))
            console.error(user.providerData)
        }
    },
    fetchUserOrders(state){

    }
}
});

export const {} = userData.actions

export default userData.reducer