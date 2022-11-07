import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase-admin/firestore'
import React from "react";
import { firebaseConfig } from "./firebase_config";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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