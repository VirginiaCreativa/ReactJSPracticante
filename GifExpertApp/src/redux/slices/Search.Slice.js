import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    palabra: 'Goku',
  },
  reducers: {
    setPalabraSearch: (state, action) => {
      state.palabra = actions.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { palabraSearch } = searchSlice.actions;