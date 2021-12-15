import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

export const userSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items = [...state.items, ...action.payload];
    },
    fetchAllItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addItem, fetchAllItems } = userSlice.actions;

export default userSlice.reducer;
