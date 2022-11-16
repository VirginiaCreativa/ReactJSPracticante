import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiKey } from '../../keys/apiGiphy';

const initialState = {
  categories: [],
  loading: false,
  empty: false
}

export const GifCategory = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload
    },
    setCategoryLoading: (state, action) => {
      state.loading = action.payload
    },
    setCategoryEmpty: (state, action) => {
      state.empty = action.payload
    },
  },
})

export const FetchCategoriesApi = (setCategory) => async (dispatch) => {
  try {
    dispatch(setCategoryLoading(true))
    const resp = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${setCategory || 'hello'}&api_key=${apiKey}&limit=11`).then((res) => {
      dispatch(setCategories(res.data.data))
      const datas = res.data.data;
      if (datas.length === 0) {
        dispatch(setCategoryEmpty(true))
      } else {
        dispatch(setCategoryEmpty(false))
      }
    })
    dispatch(setCategoryLoading(false))
    return resp;
  } catch (error) {
    console.error(error);
  }
}

// Action creators are generated for each case reducer function
export const { setCategories, setCategoryLoading, setCategoryEmpty } = GifCategory.actions;
export default GifCategory.reducer;