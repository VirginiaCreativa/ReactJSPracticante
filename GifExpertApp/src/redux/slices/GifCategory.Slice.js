import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiKey } from '../../keys/apiGiphy';

const initialState = {
  categories: [],
  error: false,
  empty: false
}

export const GifCategory = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload
    },
    setCategoryError: (state, action) => {
      state.error = action.payload
    },
    setCategoryEmpty: (state, action) => {
      state.empty = action.payload
    },
  },
})

export const FetchCategoriesApi = (setCategory) => async (dispatch) => {
  try {
    const resp = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${setCategory || 'hello'}&api_key=${apiKey}&limit=11`).then((res) => {
      dispatch(setCategories(res.data.data))
      const datas = res.data.data;
      if (datas?.length === 0) dispatch(setCategoryEmpty(true))
    })
    return resp;
  } catch (error) {
    console.error(error);
  }
}

// Action creators are generated for each case reducer function
export const { setCategories, setCategoryEmpty } = GifCategory.actions;
export default GifCategory.reducer;