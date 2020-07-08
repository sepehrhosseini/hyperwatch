import { all } from 'redux-saga/effects';
import HeaderSaga from './containers/Header/saga';
import SearchSaga from './containers/SearchPage/saga';
import TitlesSaga from './containers/Titles/saga';

export default function* rootSaga() {
  yield all([HeaderSaga(), SearchSaga(), TitlesSaga()]);
}
