import { configureStore } from '@reduxjs/toolkit';
import { searchSlice } from '../slices/Search.Slice';

export default configureStore({
  reducer: {
    search: searchSlice.reducer
  },
})