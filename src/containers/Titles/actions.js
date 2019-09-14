
export const Titles = {
    getSingle:          'Hyperwatch/Titles/GET_SINGLE',
    getSingleSuccess:   'Hyperwatch/Titles/GET_SINGLE_SUCCESS',
    getSingleFailed:    'Hyperwatch/Titles/GET_SINGLE_FAILED',
}

export function getSingle({ type, id }) {
    return {
        type: Titles.getSingle,
        titleType: type,
        id,
    }
}

export function getSingleSuccess(title) {
    return {
        type: Titles.getSingleSuccess,
        title,
    }
}

export function getSingleFailed(error) {
    return {
        type: Titles.getSingleFailed,
        error
    }
}
