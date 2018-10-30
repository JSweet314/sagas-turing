import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';
import { fetchUserInfo } from '../apiCalls';

export function* getUserSaga() {
  yield takeLatest('GET_USER_INFO', getUserInfo);
}

export function* getUserInfo(action) {
  try {
    const user = yield call(fetchUserInfo, action.payload);
    yield put(actions.exampleSuccessAction(user));
  } catch (error) {
    yield put(actions.exampleFailureAction(error.message));
  }
}
