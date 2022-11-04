import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {counterReducer} from '../reducer/main'
export const initialState = {
    counter: 0
}
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
