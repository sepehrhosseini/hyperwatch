import { Movies, Shows, Title } from './actions'

const initialState = {
    shows: [],
    movies: [],
    isLoading: true,

    single: {
        isLoading: false,
        error: null,
        id: null,
        title: null,
        type: null
    }
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

        case Title.getSingle:
            return {
                ...state,
                single: {
                    ...state.single,
                    type: action.titleType,
                    id: action.id,
                    isLoading: true,
                }
            }

        case Title.getSingleSuccess:
            return {
                ...state,
                single: {
                    ...state.single,
                    isLoading: false,
                    title: action.title
                }
            }

        case Title.getSingleFailed:
            return {
                ...state,
                single: {
                    ...state.single,
                    isLoading: false,
                    error: action.error,
                }
            }

        default:
            return state;
    }
}
