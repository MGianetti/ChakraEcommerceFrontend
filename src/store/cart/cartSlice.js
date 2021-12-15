import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    clearCart: state => {
      state.items = [];
    },
  },
});

export const { addItemToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
