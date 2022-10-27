import { configureStore } from "@reduxjs/toolkit";
import { profile } from "console";
import { auth } from "firebase-admin";
import { getAuth } from "firebase/auth";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { actions, InitialStates, rootReducerr, UserState } from "../types";
import {
  ADD_INGREDIENT,
  FETCH_INGREDIENTS_FAILED,
  INIT_INGREDIENTS,
  REMOVE_INGREDIENT,
  SET_INGREDIENTS,
  USER_DATA_FETCH,
  USER_DATA_GET,
  USER_DATA_INIT,
  USER_DATA_SET,
  USER_ORDERS_ADD,
  USER_ORDERS_ADD_FAILIURE,
  USER_ORDERS_ADD_SUCCESS,
  USER_ORDERS_GET,
  USER_ORDRES_LOAD,
  USER_ORDRES_LOAD_FAILIURE,
  USER_ORDRES_LOAD_SUCCESS,
} from "./actionTypes";
const initActiveData: InitialStates = {
  loading: true,
  ingr: {},
  totalPrice: 0,
  error: false,
  building: true,
  buying: false,
  DeliveryCost: 250,
};
const initUserData: UserState = {
  userName: "",
  userSurname: "",
  userAddress: "Test",
  userEmail: "",
  userOrders: [],
  userToken: "",
  userPhoneNumber: 0,
  userlogoutTime: 0,
  userLogState: "neverseen",
  uid: "",
};

export default function rootReducer(state: rootReducerr, action: actions) {
  return {
    userDataReduce: userDataReducer(
      state.userData ? state.userData : initUserData,
      action
    ),
    activeDataReduce: activeDataReducer(
      state.activeData ? state.activeData : initActiveData,
      action
    ),
  };
}

export function userDataReducer(state: UserState, action: actions) {
  switch (action.type) {
    case USER_DATA_FETCH:
      return state;
    case USER_DATA_GET:
      return state === initUserData ? "error" : state;
    case USER_DATA_SET:
      return { ...state, state: action.userDataPayload };
    case USER_DATA_INIT:
      return initUserData;
    case USER_ORDERS_ADD:
      return { ...state, userOrders: [...state.userOrders, action.orderData] };
    case USER_ORDERS_ADD_SUCCESS:
      const userAuth = getAuth();
      const user = userAuth.currentUser;
      if (user !== null) {
        user.providerData.forEach((profile) => {
          console.log("Sign-in provider: " + profile.providerId);
          console.log("  Provider-specific UID: " + profile.uid);
          console.log("  Name: " + profile.displayName);
          console.log("  Email: " + profile.email);
          console.log("  Photo URL: " + profile.photoURL);
        });
      }
      break;
    case USER_ORDERS_ADD_FAILIURE:
      return "";
    case USER_ORDRES_LOAD:
      return "";
    case USER_ORDRES_LOAD_SUCCESS:
      return { ...state, orders: [] };
    case USER_ORDRES_LOAD_FAILIURE:
      console.error();
      alert("Failed to load user orders");
      break;
    case USER_ORDERS_GET:
      return state.userOrders;
    default:
      return state;
  }
}
export function activeDataReducer(state: InitialStates, action: actions) {
  switch (action.type) {
    case ADD_INGREDIENT:
      if (state !== undefined && action.activeDataPayload !== undefined) {
        if (
          state.ingr[action.ingrName ? action.ingrName : "patty"] ===
          action.activeDataPayload?.ingr[
            action.ingrName ? action.ingrName : "patty"
          ]
        ) {
          return {
            ...state,
            ingr: [
              ...state.ingr[action.ingrName ? action.ingrName : "patty"],
              [
                (state.ingr[
                  action.ingrName ? action.ingrName : "patty"
                ][2] = +1),
              ],
            ],
          };
        } else if (
          state.ingr[action.ingrName ? action.ingrName : "patty"] !==
          action.activeDataPayload?.ingr[
            action.ingrName ? action.ingrName : "patty"
          ]
        ) {
          return {
            ...state,
            ingr: {
              ...state.ingr,
              [action.ingrName ? action.ingrName : "patty"]: [
                ...state.ingr[action.ingrName ? action.ingrName : "patty"],
                action.activeDataAdd,
              ],
            },
          };
        } else {
          return state;
        }
      }
      break;
    case REMOVE_INGREDIENT:
      if (action.activeDataAdd !== undefined && action.ingrName !== undefined) {
        if (
          state.ingr[action.ingrName] ===
          action.activeDataPayload?.ingr[action.ingrName]
        ) {
          return {
            ...state,
            ingr: [
              ...state.ingr[action.ingrName],
              [(state.ingr[action.ingrName][2] = -1)],
            ],
          };
        } else if (
          state.ingr[action.ingrName] !==
          action.activeDataPayload?.ingr[action.ingrName]
        ) {
          return {
            ...state,
            ingr: {
              ...state.ingr,
              [action.ingrName]: [
                ...state.ingr[action.ingrName],
                action.activeDataAdd,
              ],
            },
          };
        }
      }
      break;
    case SET_INGREDIENTS:
      return { ...state.ingr, ingr: action.activeDataPayload?.ingr };
    case INIT_INGREDIENTS:
      return initActiveData;
    case FETCH_INGREDIENTS_FAILED:
      return "Error No Data was found in the object.";
    default:
      return state;
  }
}
