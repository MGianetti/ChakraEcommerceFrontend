import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.cart = [...state.cart, ...action.payload];
    },
    clearCart: state => {
      state.cart = [];
    },
  },
});

export const { addItemToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
