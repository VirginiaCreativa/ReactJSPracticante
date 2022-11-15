import { configureStore } from '@reduxjs/toolkit';
import { GifCategory } from '../slices/GifCategory.Slice';
import { searchSlice } from '../slices/Search.Slice';

export default configureStore({
  reducer: {
    search: searchSlice.reducer,
    categores: GifCategory.reducer
  },
})