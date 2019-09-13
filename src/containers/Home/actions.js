export const Movies = {
    getPopular:         'Hyperwatch/Movies/GET_POPULAR',
    getPopularSuccess:  'Hyperwatch/Movies/GET_POPULAR_SUCCESS',
    getPopularFailed:   'Hyperwatch/Movies/GET_POPULAR_FAILED',

    getSingle:          'Hyperwatch/Movies/GET_SINGLE',
    getSingleSuccess:   'Hyperwatch/Movies/GET_SINGLE_SUCCESS',
    getSingleFailed:    'Hyperwatch/Movies/GET_SINGLE_FAILED',
}

export const Shows = {
    getPopular:         'Hyperwatch/Shows/GET_POPULAR',
    getPopularSuccess:  'Hyperwatch/Shows/GET_POPULAR_SUCCESS',
    getPopularFailed:   'Hyperwatch/Shows/GET_POPULAR_FAILED',

    getSingle:          'Hyperwatch/Shows/GET_SINGLE',
    getSingleSuccess:   'Hyperwatch/Shows/GET_SINGLE_SUCCESS',
    getSingleFailed:    'Hyperwatch/Shows/GET_SINGLE_FAILED',
}

export const Title = {
    getSingle:          'Hyperwatch/Title/GET_SINGLE',
    getSingleSuccess:   'Hyperwatch/Title/GET_SINGLE_SUCCESS',
    getSingleFailed:    'Hyperwatch/Title/GET_SINGLE_FAILED',
}

export function getPopularMovies() {
    return {
        type: Movies.getPopular,
    }
}

export function getPopularMoviesSuccess(movies) {
    return {
        type: Movies.getPopularSuccess,
        movies,
    }
}

export function getPopularMoviesFailed(error) {
    return {
        type: Movies.getPopularFailed,
        error,
    }
}

export function getPopularShows() {
    return {
        type: Shows.getPopular,
    }
}

export function getPopularShowsSuccess(shows) {
    return {
        type: Shows.getPopularSuccess,
        shows,
    }
}

export function getPopularShowsFailed(error) {
    return {
        type: Shows.getPopularFailed,
        error,
    }
}

export function getSingleTitle({ type, id }) {
    return {
        type: Title.getSingle,
        titleType: type,
        id,
    }
}

export function getSingleTitleSuccess(title) {
    return {
        type: Title.getSingleSuccess,
        title,
    }
}

export function getSingleTitleFailed(error) {
    return {
        type: Title.getSingleFailed,
        error
    }
}
