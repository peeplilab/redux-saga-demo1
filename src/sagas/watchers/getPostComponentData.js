import { takeLatest,takeEvery, take } from 'redux-saga/effects';

import { GET_POST_COMPONENT_DATA } from '../../constants';
import { post } from '../../lib/api';

function* workerGetPostComponentData(action) {
  console.log(action, 'came here');
  //const newText = yield call (post, 'url', action.payload);
  //yield put(setText(newText));
}

export default function* watchGetPostComponentData() {
  yield takeLatest(GET_POST_COMPONENT_DATA, workerGetPostComponentData);
}
