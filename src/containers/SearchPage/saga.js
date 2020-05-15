import { put, all, select, takeLatest } from 'redux-saga/effects';
import { Search, searchTitlesSuccess } from './actions';
import { searchMovies, searchShows } from '../../utils/api';

function* makeSearch() {
  try {
    const query = yield select((state) => state.header.searchQuery);

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
  yield all([takeLatest(Search.searchTitles, makeSearch)]);
}
