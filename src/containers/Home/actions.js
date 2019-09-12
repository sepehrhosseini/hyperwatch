export const Movies = {
    getPopular: 'Hyperwatch/Movies/GET_POPULAR',
    getPopularSuccess: 'Hyperwatch/Movies/GET_POPULAR_SUCCESS',
    getPopularFailed: 'Hyperwatch/Movies/GET_POPULAR_FAILED'
}

export const Shows = {
    getPopular: 'Hyperwatch/Shows/GET_POPULAR',
    getPopularSuccess: 'Hyperwatch/Shows/GET_POPULAR_SUCCESS',
    getPopularFailed: 'Hyperwatch/Shows/GET_POPULAR_FAILED'
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
