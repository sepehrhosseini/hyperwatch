import { all, put, call, takeLatest, debounce, select } from 'redux-saga/effects';
// import { browserHistory } from 'react-router-dom'
import history from '../../history';

import { Search } from './actions'
import { searchTitles } from '../SearchPage/actions';

function* makeSearch() {
    try {
		const query = yield select(state => state.header.searchQuery);
		history.push(`/search/${query}`);

		yield put(searchTitles());
    } catch (error) {
		console.log(error)
    }
}

export default function*() {
    yield all([
        debounce(500, Search.updateQuery, makeSearch),
    ])
}
