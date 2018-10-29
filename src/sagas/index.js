import { all } from 'redux-saga/effects';
import { listenForFetchUser } from './exampleSaga';

export function* rootSaga() {
  yield all([
    // import 'listening' sagas above and invoke them here, i.e.
    listenForFetchUser()
  ]);
}

export default rootSaga;
