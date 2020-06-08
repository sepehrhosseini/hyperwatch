import { takeEvery, call, put, all } from 'redux-saga/effects';
import {
  popularMovies,
  popularShows,
  singleTitle,
  singleTitleOMDB,
  getWatchlist,
} from '../../utils/api';

import {
  getPopularMoviesSuccess,
  getPopularMoviesFailed,
  getPopularShowsSuccess,
  getPopularShowsFailed,
  getSingleTitleSuccess,
  Movies,
  Shows,
  Title,
} from './actions';

function* fetchSingle({ titleType, id }) {
  try {
    const title = yield singleTitle({ type: titleType, id }).then(
      (res) => res.data,
    );
    const titleOMDB = yield singleTitleOMDB({ id }).then(
      ({ data }) => data,
    );

    yield put(getSingleTitleSuccess({ ...title, ...titleOMDB }));
  } catch (error) {
    console.log(error);
  }
}

export default function* () {
  yield all([
    takeEvery(Movies.getPopular, fetchMovies),
    takeEvery(Shows.getPopular, fetchShows),
    takeEvery(Title.getSingle, fetchSingle),
  ]);
}
