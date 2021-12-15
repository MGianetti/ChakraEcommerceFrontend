import { configureStore, combineReducers } from '@reduxjs/toolkit';

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

export default configureStore({
  reducer: defaultReducer,
});
