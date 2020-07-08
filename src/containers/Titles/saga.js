import { all, put, takeLatest } from 'redux-saga/effects';
import { merge } from 'lodash';

import { Titles, getSingleSuccess } from './actions';
import { singleTitle, singleTitleOMDB } from '../../utils/api';

function* fetchSingle({ titleType: type, id }) {
  try {
    const title = merge(
      ...(yield all([
        singleTitle({ type, id }).then(({ data }) => data),
        singleTitleOMDB({ type, id }).then(({ data }) => data),
      ])),
    );

    yield put(getSingleSuccess(title));
  } catch (error) {
    console.log(error);
  }
}

export default function* () {
  yield all([takeLatest(Titles.getSingle, fetchSingle)]);
}
