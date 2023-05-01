import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  orders: [],
  products: []
}

const appSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder(state, action) {
      state.orders.push(action.payload)
    },
    addOrders(state, action) {
      state.orders = [...state.orders, ...action.payload];
    },
    deleteOrder(state, action) {
      state.orders = state.orders.filter(order => order.id !== action.payload)
    },
    addProduct(state, action) {
      state.products.push(action.payload)
    },
    addProducts(state, action) {
      state.products = [...state.products, ...action.payload];
    },
  }
});

export const { addOrder, deleteOrder, addProduct, addOrders, addProducts } = appSlice.actions

export default appSlice.reducer
