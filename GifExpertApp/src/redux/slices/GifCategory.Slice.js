import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiKey } from '../../keys/apiGiphy';

const initialState = {
  categories: [],
}

export const GifCategory = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload
    },
    setCategory: (state, action) => {
      state.category = action.payload
    },
  },
})

export const FetchCategoriesApi = (setCategory) => async (dispatch) => {
  try {
    const resp = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${setCategory || 'hello'}&api_key=${apiKey}&limit=11`).then((res) => {
      dispatch(setCategories(res.data.data))
    })
    return resp;
  } catch (error) {
    console.warn(error);
  }
}

// Action creators are generated for each case reducer function
export const { setCategories, setCategory } = GifCategory.actions;
export default GifCategory.reducer;