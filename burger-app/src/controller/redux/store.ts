import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer, { activeDataReducer, userDataReducer } from "./main";

const masterStore = configureStore({
    reducer: {
        // userData: userDataSlice.reducer,
        // activeData: activeDataSlice.reducer
    } ,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()    
}
)

export default masterStore

