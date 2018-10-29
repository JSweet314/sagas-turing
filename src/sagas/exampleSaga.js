import { put, call, takeLatest } from 'redux-saga/effects';
import { fetchUserInfo } from '../apiCalls/fetchUserInfo';
import { exampleSuccessAction, exampleFailureAction } from '../actions';

export function* fetchUserSaga(action) {
  try {
    const user = yield call(fetchUserInfo, action.payload);
    yield put(exampleSuccessAction(user));
  } catch (error) {
    yield put(exampleFailureAction(error.message));
  }
}

export function* listenForFetchUser() {
  yield takeLatest('GET_USER_INFO', fetchUserSaga);
}
