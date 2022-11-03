import { getAuth } from "firebase/auth";
import {
  collection,
  Firestore,
  FirestoreError,
  getFirestore,
} from "firebase/firestore";
import { app } from "../../firebase/firebase_config";
import * as actionTypes from "./actionTypes";

const cord = getAuth(app);
const db = getFirestore(app);
export const purchaseBurgerSuccess = (id: number, orderData?: any) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START,
  };
};

export const purchaseBurgerFail = (error: FirestoreError) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error,
  };
};

export const purchaseBurger = (orderData: any, token: string) => {
  return (dispatch: any) => {
    //write to db users data
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  };
};

export const fetchOrdersSuccess = (orders: any) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders,
  };
};

export const fetchOrdersFail = (error: FirestoreError) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error,
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  };
};

export const fetchOrders = (db:Firestore) => {
  return async () => {
    const cord = getAuth(app);
    let user = cord.currentUser;
    if (user != null) {
      const userDocs = await collection(db, 'users/' + user.uid + '/orders')
      return userDocs
    } else {
      return 'Failed to retrieve data.'
    }
  };
};
