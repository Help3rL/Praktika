import { initializeApp } from "firebase/app";
import { collection, doc } from "firebase/firestore";
import { getFirestore } from 'firebase-admin/firestore'
import React from "react";
import { firebaseConfig } from "./firebase_config";
import functions from "firebase-functions";
import { Data } from "../types";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
var orderDB;
const registerOrder = async (Data: Data) => {
  if (Data.userData?.uid !== undefined){
    orderDB = db.collection('users').doc(Data.userData?.uid)
  }else{
    orderDB = db.collection('users').doc('null')
    console.error('couldn\'t get UID')
  }
  try {
    const userData = await orderDB.get();
    if (!userData.exists){
      console.error('doesnt expist');
      
    } else {
      console.log(userData.data())
    }
  }catch (error:any) {
    console.error(error);
    alert(error?.message);
  }
  try {
    if (Data.userData !== undefined) {
      const user = Data.userData;
      if (Data.orderData !== undefined) {
        var addOrder = await orderDB.update({
          orders: 'getcurrent orders and add new one'
        })
      } else if (Data.orderData === undefined) {
        alert("Error empty order");
      } else {
        alert("Unexpected error!\n Report this to administration");
      }
    }
  } catch (error:any) {
    console.error(error);
    alert(error?.message);
  }
};
