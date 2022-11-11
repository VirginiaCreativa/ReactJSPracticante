import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    palabra: 'Goku',
  },
  reducers: {
    setPalabraSearch: (state, action) => {
      state.palabra = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPalabraSearch } = searchSlice.actions;
export default searchSlice.reducer;