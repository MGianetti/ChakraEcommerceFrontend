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
    removeItemFromCart: (state, action) => {
      const { items } = state;
      const removingItemIndex = items.findIndex(
        item => item.id === action.payload.id
      );
      state.items.splice(removingItemIndex, 1);
    },
  },
});

export const { addItemToCart, clearCart, removeItemFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
