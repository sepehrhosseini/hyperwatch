import { Movies, Shows } from './actions'

const initialState = {
    shows: [],
    movies: [],
    isLoading: true,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case Movies.getPopular:
            return {
                ...state,
                isLoading: true,
            }

        case Movies.getPopularSuccess:
            return {
                ...state,
                isLoading: false,
                movies: action.movies
            }

        case Movies.getPopularFailed:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }

        case Shows.getPopular:
            return {
                ...state,
                isLoading: true,
            }

        case Shows.getPopularSuccess:
            return {
                ...state,
                isLoading: false,
                shows: action.shows,
            }

        case Shows.getPopularFiled:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }

        default:
            return state;
    }
}
