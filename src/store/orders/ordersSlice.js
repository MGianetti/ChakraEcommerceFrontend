import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders = [...state.orders, ...action.payload];
    },
    fetchAllOrders: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addOrder, fetchAllOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
