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
    },
    addStockToProduct: (state, action) => {
      const { id, qtyToAdd } = action.payload;
      console.log(`${id}, ${qtyToAdd}`)
      const productObj = state.products.find((product) => product.id == id)
      if (productObj) {
        productObj.qtyInStock += qtyToAdd
      }
    },
    updateProductName: (state, action) => {
      const { id, newProductName } = action.payload;
      const productObj = state.products.find((product) => product.id == id)
      if (productObj) {
        productObj.name = newProductName
      }
    }
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = productsSlice.actions
export const { addProduct, addStockToProduct, updateProductName } = productsSlice.actions

export default productsSlice.reducer