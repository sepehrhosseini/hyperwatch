import { combineReducers } from 'redux';

// Reducers
import home from './containers/Home/reducer';
import header from './containers/Header/reducer';
import search from './containers/SearchPage/reducer';
import titles from './containers/Titles/reducer';
import watchlist from './containers/WatchlistPage/reducer';

const rootReducer = combineReducers({
  home,
  header,
  search,
  titles,
  watchlist,
});

export default rootReducer;
