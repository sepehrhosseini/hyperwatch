import { Titles } from './actions';

const initialState = {
  single: {
    isLoading: false,
    title: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Titles.getSingle:
      return {
        ...state,
        single: {
          ...state.single,
          isLoading: true,
          type: action.titleType,
        },
      };

    case Titles.getSingleSuccess:
      return {
        ...state,
        single: {
          ...state.single,
          isLoading: false,
          title: action.title,
        },
      };

    case Titles.getSingleFailed:
      return {
        ...state,
        single: {
          ...state.single,
          isLoading: false,
          error: action.error,
        },
      };

    default:
      return state;
  }
};
