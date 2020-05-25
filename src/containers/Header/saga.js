import { all, put, debounce } from 'redux-saga/effects';

import { Search } from './actions';
import { searchTitles } from '../SearchPage/actions';

function* makeSearch() {
  try {
    yield put(searchTitles());
  } catch (error) {
    console.log(error);
  }
}

export default function* () {
  yield all([debounce(500, Search.updateQuery, makeSearch)]);
}
