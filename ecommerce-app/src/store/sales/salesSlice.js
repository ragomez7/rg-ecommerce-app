import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  sales: [],
  status: 'idle'
}
export const fetchSales = createAsyncThunk('sales/fetchSales', async (id) => {
    console.log('launch')
    const response = await fetch(`http://localhost:8080/api/sales/product/${id}`);
    const data = await response.json();
    console.log(`response ${data}`)
    return data
  })

export const salesSlice = createSlice({
  name: 'sales',
  initialState,
  reducers: {
    resetSales: (state) => {
        state.sales = []
        state.status = 'idle'
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSales.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchSales.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.sales = state.sales.concat(action.payload)
      })
      .addCase(fetchSales.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})


 // const getProduct = async () => {
  //   let response = await fetch(`http://localhost:8080/api/products/${id}`);
  //   let data = await response.json();
  //   setProduct(data);
  //   console.log(Object.keys(data));

  //   response = await fetch(`http://localhost:8080/api/sales/product/${id}`);
  //   data = await response.json();
  //   setUnitsSold(data);
  // };
  // useEffect(() => {
  //   getProduct();
  // }, []);

export const { resetSales } = salesSlice.actions

export default salesSlice.reducer