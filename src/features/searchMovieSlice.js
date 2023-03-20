import { createSlice } from '@reduxjs/toolkit';
import ax from '../axios';

const initialState = {
  movies: [],
};

export const movieSlice = createSlice({
  name: 'searchMovie',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { setMovies} = movieSlice.actions;

export const fetchMovies = (text) => async (dispatch) => {
  try {
    const req = await ax.get(`/search/movie?api_key=3d27ca05766cce767d88c4348c23c034&language=en-US&query=${text}`)
    dispatch(setMovies(req.data.results));
  } catch (error) {
    console.log(error);
  }
};



export default movieSlice.reducer;