import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer, { activeDataReducer, userDataReducer } from "./main";
import userData from "./slices/userData";

const masterStore = configureStore({
  reducer: rootReducer,
});

export default masterStore;
export type RootState = ReturnType<typeof masterStore.getState>;
export type masterDispatch = typeof masterStore.dispatch;

const userData = configureStore({
  reducer: {
    userName: ,
    userSurname: "",
    userAddress: "Test",
    userEmail: "",
    userOrders: [],
    userPhoneNumber: 0,
    userlogoutTime: 0,
    uid: "",
  },
});
