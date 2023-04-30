import { createSlice } from '@reduxjs/toolkit'
import { orders as ordersData, products as productsData } from '../data';

export const initialState = {
  // orders: [],
  // products: []
  orders: ordersData,
  products: productsData,
}

const appSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder(state, action) {
      state.orders.push(action.payload)
    },
    deleteOrder(state, action) {
      state.orders = state.orders.filter(order => order.id !== action.payload)
    },
    addProduct(state, action) {
      state.products.push(action.payload)
    },
  }
});

export const { addOrder, deleteOrder, addProduct } = appSlice.actions

export default appSlice.reducer

// const appSlice = createSlice({
//   name: 'orders',
//   initialState,
//   reducers: {
//     addOrder(state, action) {
//       state.orders.push(action.payload)
//     },
//     deleteOrder(state, action) {
//       state.orders = state.orders.filter(order => order.id !== action.payload)
//     },
//     addProduct(state, action) {
//       const orderID = state.orders[state.orders.length - 1].id
//       state.products.push(action.payload) 
//       state.products = state.products.map(product => { 
//         if (product.order === null) {
//           return {
//             ...product,
//             order: orderID,
//           }
//         }
//         return product
//       })
//     },
//   }
// });

// export const { addOrder, deleteOrder, addProduct } = appSlice.actions

// export default appSlice.reducer
