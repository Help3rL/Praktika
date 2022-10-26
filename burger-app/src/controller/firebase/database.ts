import { initializeApp } from "firebase/app";
import { collection, doc } from "firebase/firestore";
import { getFirestore } from 'firebase-admin/firestore'
import React from "react";
import { firebaseConfig } from "./firebase_config";
import functions from "firebase-functions";
import { UserState } from "../types";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
var orderDB;
export const registerOrder = async (Data: UserState) => {
  if (Data.uid !== undefined){
    orderDB = db.collection('users').doc(Data.uid)
  }else{
    orderDB = db.collection('users').doc('null')
    console.error('couldn\'t get UID')
  }
  try {
    const userData = await orderDB.get();
    if (!userData.exists){
      console.error('doesnt expist'); 
      
    } else {
      console.debug(userData.data())
    }
  }catch (error:any) {
    console.error(error);
    alert(error?.message);
  }
};

export const initIngredients = async () => {
  const ingrDB = db.collection('burgerData').doc('Ingredients')
  const ingrList = await ingrDB.get()
  if (!ingrList.exists){
    console.info('Error')
    return 'error'
  } else {
    console.debug(ingrList.data())
    return ingrList.data
  }
}

export function getUserData () {
  
}