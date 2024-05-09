import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: true,
}

export const sideBarSlice = createSlice({
  name: 'sideBar',
  initialState,
  reducers: {
    setOpenSide: (state,action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setOpenSide } = sideBarSlice.actions

export default sideBarSlice.reducer
