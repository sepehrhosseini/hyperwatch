export const Search = {
  searchTitles: 'Hyperwatch/Search/SEARCH_TITLES',
  searchTitlesSuccess: 'Hyperwatch/Search/SEARCH_TITLES_SUCCESS',
  searchTitlesFailed: 'Hyperwatch/Search/SEARCH_TITLES_FAILED',
};

export function searchTitles() {
  return {
    type: Search.searchTitles,
  };
}

export function searchTitlesSuccess({ movies, shows }) {
  return {
    type: Search.searchTitlesSuccess,
    movies,
    shows,
  };
}

export function searchTitlesFailed(error) {
  return {
    type: Search.searchTitlesFailed,
    error,
  };
}
