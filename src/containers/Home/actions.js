import { uniqBy } from 'lodash';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addToWatchlist as addToWatchlistAPI,
  removeFromWatchlist as removeFromWatchlistAPI,
  getWatchlist as getWatchlistAPI,
  getGenres as getGenresAPI,
  popularMovies,
  popularShows,
  singleTitle,
  singleTitleOMDB,
} from '../../utils/api';

export const getPopular = createAsyncThunk('getPopular', async () => {
  const [{ data: movies }, { data: shows }] = await Promise.all([
    popularMovies(),
    popularShows(),
  ]);

  return { movies, shows };
});

export const getWatchlist = createAsyncThunk(
  'watchlist',
  async () => {
    const { data } = await getWatchlistAPI();
    return data;
  },
);

export const addToWatchlist = createAsyncThunk(
  'watchlist/add',
  async ({ movies, shows, episodes, seasons }, thunkApi) => {
    await addToWatchlistAPI({ movies, shows, episodes, seasons });
    thunkApi.dispatch(getWatchlist());
  },
);

export const removeFromWatchlist = createAsyncThunk(
  'watchlist/remove',
  async ({ movies, shows, episodes, seasons }, thunkApi) => {
    await removeFromWatchlistAPI({
      movies,
      shows,
      episodes,
      seasons,
    });
    thunkApi.dispatch(getWatchlist());
  },
);

export const getGenres = createAsyncThunk('genres/get', async () => {
  const [
    { data: moviesGenres },
    { data: showsGenres },
  ] = await Promise.all([
    getGenresAPI({ type: 'movies' }),
    getGenresAPI({ type: 'shows' }),
  ]);

  const genres = uniqBy([...moviesGenres, ...showsGenres], 'slug');
  return genres;
});

export const selectGenre = createAsyncThunk(
  'genres/select',
  async (genre) => {
    const filter = { genres: [genre] };
    const [{ data: movies }, { data: shows }] = await Promise.all([
      popularMovies(filter),
      popularShows(filter),
    ]);

    return { movies, shows };
  },
);

export const getSingle = createAsyncThunk(
  'title/single',
  async ({ id, type }) => {
    const { data: title } = await singleTitle({ type, id });
    const { data: titleOMDB } = await singleTitleOMDB({ id });

    return { ...title, ...titleOMDB };
  },
);
