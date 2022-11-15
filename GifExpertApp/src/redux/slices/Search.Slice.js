import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  palabra: 'Goku',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setPalabraSearch: (state, action) => {
      // const validaState = () => state.palabra.includes(action.payload);
      // console.log(validaState());
      state.palabra = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPalabraSearch } = searchSlice.actions;
export default searchSlice.reducer;