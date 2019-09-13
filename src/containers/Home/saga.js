import { takeEvery, call, put, all } from 'redux-saga/effects';
import {
    popularMovies,
    popularShows,
    singleTitle,
    singleTitleOMDB
} from '../../utils/api';

import {
    getPopularMoviesSuccess,
    getPopularMoviesFailed,
    getPopularShowsSuccess,
    getPopularShowsFailed,
    getSingleTitleSuccess,
    Movies,
    Shows,
    Title
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

function* fetchSingle({ titleType, id }) {
    try {
        const title = yield singleTitle({ type: titleType, id }).then(res => res.data)
        const titleOMDB = yield singleTitleOMDB({ id }).then(({ data }) => data)
        console.log('single title', { ...title, ...titleOMDB });

        yield put(getSingleTitleSuccess({ ...title, ...titleOMDB }));
    } catch (error) {
        console.log(error)
    }
}

export default function*() {
    yield all([
        takeEvery(Movies.getPopular, fetchMovies),
        takeEvery(Shows.getPopular, fetchShows),
        takeEvery(Title.getSingle, fetchSingle)
    ])
}
