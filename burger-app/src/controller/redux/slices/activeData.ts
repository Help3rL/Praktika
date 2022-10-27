import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: true,
    ingr: {},
    totalPrice: 0,
    error: false,
    building: true,
    buying: false,
    DeliveryCost: 250,
}

const activeData = createSlice({
  name: 'activeData',
  initialState,
  reducers: {

  }
});

export const {} = activeData.actions

export default activeData.reducer