import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export const burger = configureStore({
  reducer: {
    // ingredients: ingredients, //array
    // buying: buying, //boolean
    // cost: cost, // int

  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


export type BurgerAppDispatch = typeof burger.dispatch;
export type BurgerRootState = ReturnType<typeof burger.getState>;
export type BurgerAppThunk<ReturnType = void> = ThunkAction< 
  ReturnType, 
  BurgerRootState, 
  unknown, 
  Action<string>
>