import { configureStore } from '@reduxjs/toolkit'
import orderReducer from './ordersSlice'

const store = configureStore({
  reducer: {
    orders: orderReducer
  }
});

export default store;