import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: localStorage.getItem('favorites')
    ? JSON.parse(localStorage.getItem('favorites'))
    : [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter((favorite) => favorite.id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    removeAll : (state, action) => {
      state.favorites = [];
      localStorage.removeItem('favorites');
    }
  },
});

export const { removeAll, addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;