// import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import {
  userDataAction,
  UserState,
  rootReducers,
  InitialStates,
  activeDataAction,
} from "../types";
import {
  ACTIVE_DATA,
  ADD_INGREDIENT,
  ADD_ORDER_TO_USER_DB,
  CHECK_ACTIVE_DATA,
  FAILED_USER_DATA,
  FETCH_INGREDIENTS_FAILED,
  GET_ACTIVE_DATA,
  GET_USER_DATA,
  REMOVE_INGREDIENT,
  SET_ACTIVE_DATA,
  SET_INGREDIENTS,
  SET_USER_DATA,
  UPDATE_ACTIVE_DATA,
  USER_DATA,
} from "./actions";
// import userDataReducer from './userdata'
// export const userData = configureStore({
//     reducer: {
//         userName: userDataReducer.usernameReducer,
//         userSurname: userDataReducer.surnameReducer,
//         userAddress: userDataReducer.addressReducer,
//         userZip: userDataReducer.zipReducer,
//         userEmail: userDataReducer.emailReducer,
//         userOrders: userDataReducer.ordersReducer,
//         userCity: userDataReducer.cityReducer,
//         userToken: userDataReducer.tokenReducer,
//         userPhoneNumber: userDataReducer.telNumberReducer,
//         userlogoutTime: userDataReducer.logoutReducer,
//         userLogState: userDataReducer.logstateReducer,
//         uid: userDataReducer.uidReducer
//     }
// })
// export type userDataRoot = ReturnType<typeof userData.getState>
// export type userDataAppDispatch = typeof userData.dispatch

const initialUserData: UserState = {
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
};

const activeData = {
  loading: true,
  ingr: {
    patty: ["patty", 150, 1],
    cheese: ["cheese", 200, 2],
    lettuce: ["lettuce", 300, 3],
    tomato: ["tomato", 400, 4],
  },
  totalPrice: 0,
  error: false,
  building: true,
  buying: false,
};

export default function rootReducer(action: rootReducers) {
  if (
    action.activeDataReducer !== undefined &&
    action.userDataReducer !== undefined
  ) {
    return {
      userData: userRootReducer(initialUserData, action.userDataReducer),
      activeData: activeDataReducer(activeData, action.activeDataReducer),
    };
  }
}

export function activeDataReducer(
  state: InitialStates,
  action: activeDataAction
) {
  switch (action.type) {
    case ACTIVE_DATA:
      return state;
    case SET_ACTIVE_DATA:
      return {...state, state: action.payload }
    case GET_ACTIVE_DATA:
      return state;
    case UPDATE_ACTIVE_DATA:
      return "a";
    case CHECK_ACTIVE_DATA:
      return state;
    case ADD_INGREDIENT:
      return "";
    case REMOVE_INGREDIENT:
      return "";
    case SET_INGREDIENTS:
      return "";
    case FETCH_INGREDIENTS_FAILED:
      if (state === activeData) {
        return "NoUserData was recorded";
      } else {
        return state;
      }
    default: 
      return state
  }
}

export function userRootReducer(state: UserState, action: userDataAction) {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        state: action.payload,
      };
    case ADD_ORDER_TO_USER_DB:
      return {
        ...state,
        userOrders: [
          ...state.userOrders,
          {
            ingrName: action.orderpayload.ingrName,
            orderCost: action.orderpayload.orderCost,
            paid: action.orderpayload.paid,
            id: action.orderpayload.id,
            amount: action.orderpayload.amount,
            date: action.orderpayload.date,
          },
        ],
      };
    case GET_USER_DATA:
      return state;
    case FAILED_USER_DATA:
      if (state === initialUserData) {
        return "NoUserData was recorded";
      } else {
        return state;
      }
    case USER_DATA:
      return state;
    default:
      return state;
  }
}

/* 
add ingr
remove ingr
call order
record order
get userdata
send updates from controlls to visual
send updates to user data mainly orders 
record order information to firestore
!!!No auth handling needed!!!
*/
