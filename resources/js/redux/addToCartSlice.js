// addToCartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0, 
};

const addToCartSlice = createSlice({
  name: 'addToCart',
  initialState,
  reducers: {
    add: (state, action) => {
      state.value += action.payload; // Increment value by the payload value
    },
   
  },
});

export const { add } = addToCartSlice.actions;

export default addToCartSlice.reducer;