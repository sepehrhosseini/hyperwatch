import { all, put, takeLatest, delay } from 'redux-saga/effects';

import { Search } from './actions';
import { searchTitles } from '../SearchPage/actions';

function* makeSearch({ force }) {
  try {
    if (!force) yield delay(500);

    yield put(searchTitles());
  } catch (error) {
    console.log(error);
  }
}

export default function* () {
  yield all([takeLatest(Search.updateQuery, makeSearch)]);
}
