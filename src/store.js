/* eslint-disable global-require */
// Redux Toolkit
import {
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

// Saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

import rootReducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

const store = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, ...getDefaultMiddleware()],
  });
  sagaMiddleware.run(rootSaga);
  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducer', () => {
        store.replaceReducer(require('./reducer'));
      });
    }
  }
  return store;
};

export default store;
