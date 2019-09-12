import { takeEvery, call, put, all } from 'redux-saga/effects';
import {
    popularMovies,
    popularShows,
} from '../../utils/api';

import {
    getPopularMoviesSuccess,
    getPopularMoviesFailed,
    getPopularShowsSuccess,
    getPopularShowsFailed,
    Movies,
    Shows
} from './actions'

function* fetchMovies() {
    try {
        const response = yield call(popularMovies);
        const movies = response.data;

        yield put(getPopularMoviesSuccess(movies))
    } catch (error) {
        yield put(getPopularMoviesFailed(error))
    }
}

function* fetchShows() {
    try {
        const response = yield call(popularShows);
        const shows = response.data;

        yield put(getPopularShowsSuccess(shows))
    } catch (error) {
        yield put(getPopularShowsFailed(error))
    }
}

export default function*() {
    yield all([
        takeEvery(Movies.getPopular, fetchMovies),
        takeEvery(Shows.getPopular, fetchShows),
    ])
}
