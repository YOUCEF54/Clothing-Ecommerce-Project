
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: false,
  };

  const changeThemeSlice = createSlice({
    name: 'changeTheme',
    initialState,
    reducers: {
      change: (state) => {
        state.value = !state.value ;
      },

    },
  });

  export const { change } = changeThemeSlice.actions;

  export default changeThemeSlice.reducer;
