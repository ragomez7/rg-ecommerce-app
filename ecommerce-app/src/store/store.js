import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../components/products/productsSlice'
import adminReducer from '../components/admin/adminSlice'
import salesReducer from './sales/salesSlice'

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    sales: salesReducer,
    products: productsReducer,
  },
})