import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import userDataReducer from './userdata'
export const userData = configureStore({
    reducer: {
        userName: userDataReducer.usernameReducer,
        userSurname: userDataReducer.surnameReducer,
        userAddress: userDataReducer.addressReducer,
        userZip: userDataReducer.zipReducer,
        userEmail: userDataReducer.emailReducer,
        userOrders: userDataReducer.ordersReducer,
        userCity: userDataReducer.cityReducer,
        userToken: userDataReducer.tokenReducer,
        userPhoneNumber: userDataReducer.telNumberReducer,
        userlogoutTime: userDataReducer.logoutReducer,
        userLogState: userDataReducer.logstateReducer,
        uid: userDataReducer.uidReducer
    }
})
export type userDataRoot = ReturnType<typeof userData.getState>
export type userDataAppDispatch = typeof userData.dispatch

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
          console.log(profile)
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
