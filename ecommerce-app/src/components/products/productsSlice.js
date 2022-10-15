import { createSlice } from '@reduxjs/toolkit'
import initialProductList from '../../initialProductList';

const getAllProducts = async () => {
    console.log('FUNCTION TRIGGERED')
    const response = await fetch("http://localhost:8080/api/products");
    
    const data = await response.json();
    console.log(data)
    return data;
  };
  
const initialState = {
  products: initialProductList
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
        state.products.push(action.payload)
    }
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = productsSlice.actions
export const { addProduct } = productsSlice.actions

export default productsSlice.reducer