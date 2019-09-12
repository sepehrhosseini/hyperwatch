import { all } from 'redux-saga/effects';
import HomeSaga from './containers/Home/saga';
import HeaderSaga from './containers/Header/saga';
import SearchSaga from './containers/SearchPage/saga';

export default function* rootSaga() {
    yield all([
        HomeSaga(),
        HeaderSaga(),
        SearchSaga(),
    ])
}
