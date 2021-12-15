import { defineState } from 'redux-localstore';
import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
  email: null,
  userName: null,
  isAuthenticated: false,
  isAdmin: false,
};

const initialState = defineState(defaultState)('user');

export const userSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    logIn: (state, action) => {
      const { email, userName, isAdmin, isAuthenticated } = action.payload;
      state.email = email;
      state.userName = userName;
      state.isAdmin = isAdmin;
      state.isAuthenticated = isAuthenticated;
    },
    logOut: state => {
      state.email = null;
      state.userName = null;
      state.isAdmin = false;
      state.isAuthenticated = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
