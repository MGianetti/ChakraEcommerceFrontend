import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    email: null,
    username: null,
    isAuthenticated: false,
    isAdmin: false,
  },
};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    logIn: (state, action) => {
      const { email, username, isAdmin, isAuthenticated } = action.payload;
      state.user = { email, username, isAdmin, isAuthenticated };
    },
    logOut: state => {
      state.user = {
        email: null,
        username: null,
        isAdmin: false,
      };
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
