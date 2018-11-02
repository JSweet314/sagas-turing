import {takeLatest, call, put} from 'redux-saga/effects';
import {fetchUserInfo} from '../apiCalls';
import {hackerNewsStoriesSaga} from './hackerNewsStoriesSaga.js';
import * as actions from '../actions';

export function* listenForGetUser() {
  yield takeLatest('GET_USER_INFO', userSaga);
}

export function* userSaga(action) {
  try {
    const response = yield call(fetchUserInfo, action.payload);
    const stories = yield call(hackerNewsStoriesSaga);
    yield put(actions.userInfoSuccess({...response, stories}));
  } catch (error) {
    yield put(actions.userInfoFailure(error.message));
  }
}
