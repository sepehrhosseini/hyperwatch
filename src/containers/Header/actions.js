export const Search = {
  updateQuery: 'Hyperwatch/Search/UPDATE_QUERY',
};

export function updateSearchQuery(query, force) {
  return {
    type: Search.updateQuery,
    query,
    force,
  };
}
