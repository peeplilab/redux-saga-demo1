import { put, takeLatest, call } from 'redux-saga/effects';

import { GET_USERS_SAGA } from '../../constants';
import { setUsers } from '../../actions';
import { get } from '../../lib/api';

function* workerGetUsersSaga() {
  const users = yield call(get, 'https://jsonplaceholder.typicode.com/users');
  console.log(users);
  yield put(setUsers(users));
}

export default function* watchGetUsersSaga() {
  yield takeLatest(GET_USERS_SAGA, workerGetUsersSaga);
}
