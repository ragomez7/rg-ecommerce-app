import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false
}

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    authenticate: (state) => {
        state.isAuthenticated = true
    }
  },
})

// Action creators are generated for each case reducer function

export const { authenticate } = adminSlice.actions

export default adminSlice.reducer