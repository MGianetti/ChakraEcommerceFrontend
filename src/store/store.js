import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storeSynchronize from 'redux-localstore';

import userReducer from './user/userSlice';
import itemsReducer from './items/itemsSlice';
import ordersReducer from './orders/ordersSlice';
import cartReducer from './cart/cartSlice';

const defaultReducer = combineReducers({
  user: userReducer,
  items: itemsReducer,
  orders: ordersReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: defaultReducer,
});

export default store;

storeSynchronize(store);
