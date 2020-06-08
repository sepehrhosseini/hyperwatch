import { combineReducers } from 'redux';

// Redux Toolkit
import {
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

// Saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

// Reducers
import home from './containers/Home/reducer';
import header from './containers/Header/reducer';
import search from './containers/SearchPage/reducer';
import titles from './containers/Titles/reducer';
import watchlist from './containers/WatchlistPage/reducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  home,
  header,
  search,
  titles,
  watchlist,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, ...getDefaultMiddleware()],
});

sagaMiddleware.run(rootSaga);

export default store;
