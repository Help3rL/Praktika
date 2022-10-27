import { configureStore } from "@reduxjs/toolkit";
import { activeDataReducer, userDataReducer } from "./main";

const masterStore = configureStore(
    {
        reducer: {

        }
    }
)
const userDataStore = configureStore({
    reducer: {
        userData: userDataReducer
    }
})
const activeDataStore = configureStore({
    reducer: {
        activeData: activeDataReducer
    }
})