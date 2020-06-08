import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getWatchlist } from '../../utils/api';

const fetchData = createAsyncThunk(
  'watchlist/fetchData',
  async (thunkApi) => {
    const { data: watchlist } = await getWatchlist();
    return watchlist;
  },
);

const slice = createSlice({
  name: 'Watchlist',
  initialState: { data: [], err: null, isLoading: false },
  reducer: {},
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [fetchData.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export { fetchData };

export default slice.reducer;
