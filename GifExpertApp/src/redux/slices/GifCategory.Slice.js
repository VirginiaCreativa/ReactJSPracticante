import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiGiphy = 'je7Uki80N76g8oUO4BjTzl4UgHESjMeA'

const initialState = {
  categories: [],
  category: 'Goku'
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

export const FetchCategoriesApi = () => async (dispatch) => {
  try {
    const resp = await axios.get(`api.giphy.com/v1/gifs/search?api_key=${apiGiphy}`).then((res) => {
      dispatch(console.log(res.data))
    })
    return resp;
  } catch (error) {
    console.warn(error);
  }
}

// Action creators are generated for each case reducer function
export const { setCategories, setCategory } = GifCategory.actions;
export default GifCategory.reducer;