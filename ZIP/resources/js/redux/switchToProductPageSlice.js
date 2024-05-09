import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const switchToProductPageSlice = createSlice({
  name: 'witchToProductPage',
  initialState,
  reducers: {
    switchToProductPage: (state) => {
      state.value = !state.value ;
    },
  },
})

// Action creators are generated for each case reducer function
export const { switchToProductPage } = switchToProductPageSlice.actions

export default switchToProductPageSlice.reducer
