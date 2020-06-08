import { pick, merge } from 'lodash';
import { createSlice } from '@reduxjs/toolkit';
import {
  addToWatchlist,
  removeFromWatchlist,
  getWatchlist,
  getGenres,
  selectGenre,
  getPopular,
  getSingle,
} from './actions';
import { get } from 'lodash';

const slice = createSlice({
  name: 'home',
  initialState: {
    shows: [],
    movies: [],
    isLoading: true,
    err: null,

    watchlist: {
      data: [],
      loadingIds: [],
      err: null,
    },

    genres: {
      data: [],
      isLoading: false,
      selectedSlug: null,
    },

    single: {
      isLoading: false,
      err: null,
      id: null,
      title: null,
      type: null,
    },
  },
  reducers: {},
  extraReducers: {
    [addToWatchlist.fulfilled]: (state, action) => {
      const ids = Object.values(action.meta.arg)
        .flat()
        .map((title) => get(title, 'ids.trakt'));
      state.watchlist.loadingIds = state.watchlist.loadingIds.filter((id) => !ids.includes(id));
    },
    [addToWatchlist.pending]: (state, action) => {
      const ids = Object.values(action.meta.arg)
        .flat()
        .map((title) => get(title, 'ids.trakt'));

      state.watchlist.loadingIds.push(...ids);
    },
    [addToWatchlist.rejected]: (state, action) => {
      state.watchlist.isLoading = false;
    },
    [removeFromWatchlist.fulfilled]: (state, action) => {
      const ids = Object.values(action.meta.arg)
        .flat()
        .map((title) => get(title, 'ids.trakt'));
      state.watchlist.loadingIds = state.watchlist.loadingIds.filter((id) => !ids.includes(id));
      state.watchlist.isLoading = false;
    },
    [removeFromWatchlist.pending]: (state, action) => {
      const ids = Object.values(action.meta.arg)
        .flat()
        .map((title) => get(title, 'ids.trakt'));

      state.watchlist.loadingIds.push(...ids);
      state.watchlist.isLoading = true;
    },
    [removeFromWatchlist.rejected]: (state, action) => {
      const ids = Object.values(action.meta.arg)
        .flat()
        .map((title) => get(title, 'ids.trakt'));
      state.watchlist.loadingIds = state.watchlist.loadingIds.filter((id) => !ids.includes(id));
      state.watchlist.isLoading = false;
    },
    [getWatchlist.fulfilled]: (state, action) => {
      state.watchlist.data = action.payload;
    },
    [getGenres.pending]: (state) => {
      state.genres.isLoading = true;
    },
    [getGenres.fulfilled]: (state, action) => {
      state.genres.isLoading = false;
      state.genres.data = action.payload;
    },
    [getGenres.rejected]: (state) => {
      state.genres.isLoading = false;
    },
    [selectGenre.pending]: (state, action) => {
      state.genres.selectedSlug = action.meta.arg;
    },
    [selectGenre.fulfilled]: (state, action) => {
      merge(state, pick(action.payload, ['movies', 'shows']));
    },
    [getPopular.pending]: (state) => {
      state.isLoading = true;
    },
    [getPopular.fulfilled]: (state, action) => {
      state.isLoading = false;
      merge(state, pick(action.payload, ['movies', 'shows']));
    },
    [getPopular.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
    [getSingle.pending]: (state) => {
      state.single.isLoading = true;
    },
    [getSingle.fulfilled]: (state, action) => {
      state.single.isLoading = false;
      state.single.title = action.payload;
    },
    [getSingle.rejected]: (state, action) => {
      state.single.isLoading = false;
      state.single.err = action.payload;
    },
  },
});

export default slice.reducer;
