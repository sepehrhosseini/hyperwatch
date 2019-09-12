
export const Search = {
    updateQuery: 'Hyperwatch/Search/UPDATE_QUERY'
}

export function updateSearchQuery(query) {
    return {
        type: Search.updateQuery,
        query,
    }
}
