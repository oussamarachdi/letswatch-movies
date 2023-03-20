import { configureStore } from '@reduxjs/toolkit';
import searchMovieReducer from "../src/features/searchMovieSlice"
import favoriteMovieSlice from './features/favoriteMoviesSlice';

export const store = configureStore({
  reducer: {
    searchMovie:searchMovieReducer,
    favoriteMovieSlice : favoriteMovieSlice,
  },
});