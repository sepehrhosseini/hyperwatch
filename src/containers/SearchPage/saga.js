import {
  put,
  all,
  select,
  takeLatest,
  delay,
  call,
  debounce,
} from 'redux-saga/effects';
import history from '../../history';
import { Search, searchTitlesSuccess } from './actions';
import { searchMovies, searchShows } from '../../utils/api';

function* makeSearch() {
  try {
    const query = yield select((state) => state.header.searchQuery);

    if (!query) return;

    yield call(history.push, `/search/${encodeURIComponent(query)}`);

    const [movies, shows] = yield all([
      searchMovies({ query }).then((res) => res.data),
      searchShows({ query }).then((res) => res.data),
    ]);

    yield put(searchTitlesSuccess({ movies, shows }));
  } catch (error) {
    console.log(error);
  }
}

export default function* () {
  yield all([debounce(700, Search.searchTitles, makeSearch)]);
}
