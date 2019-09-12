import { Search } from './actions';

const initialState = {
    isLoading: true,
    movies: [],
    shows: [],
    error: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Search.searchTitles:
            return {
                ...state,
                isLoading: true,
            };

        case Search.searchTitlesSuccess:
            return {
                ...state,
                isLoading: false,
                movies: action.movies,
                shows: action.shows
            }

        case Search.searchTitlesFailed:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }

        default:
            return state;
    }
}
