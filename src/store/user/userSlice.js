import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    email: null,
    userName: null,
    isAuthenticated: false,
    isAdmin: false,
  },
};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    logIn: (state, action) => {
      const { email, userName, isAdmin, isAuthenticated } = action.payload;
      state.user = { email, userName, isAdmin, isAuthenticated };
    },
    logOut: state => {
      state.user = {
        email: null,
        userName: null,
        isAdmin: false,
      };
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
