import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchUserInfo } from '../apiCalls/fetchUserInfo.js';
import * as actions from '../actions';

export function* listenForGetUser() {
  yield takeLatest('GET_USER_INFO', getUserSaga);
}

export function* getUserSaga(action) {
  try {
    const response = yield call(fetchUserInfo, action.payload);
    yield put(actions.exampleSuccessAction(response));
  } catch (error) {
    yield put(actions.exampleFailureAction(error.message));
  }
}
