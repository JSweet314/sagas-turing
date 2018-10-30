import { all } from 'redux-saga/effects';
import { getUserSaga } from './getUserSaga';

export function* rootSaga() {
  yield all([getUserSaga()]);
}

export default rootSaga;
