import { Search } from './actions';

const initialState = {
  searchQuery: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Search.updateQuery:
      return {
        ...state,
        searchQuery: action.query,
      };

    default:
      return state;
  }
};
