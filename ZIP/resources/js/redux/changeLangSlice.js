import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [
    { name: "English", country: "US", lang:"en" },
    { name: "French", country: "FR", lang:"fr" },
    { name: "Arabic", country: "MA", lang:"ar" },
    { name: "Spanish", country: "ES", lang:"es" }
  ],
}

export const changeLangSlice = createSlice({
  name: 'changeLang',
  initialState,
})


export default changeLangSlice.reducer
