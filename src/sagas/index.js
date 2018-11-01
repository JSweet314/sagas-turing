import { all } from 'redux-saga/effects';
import { listenForGetUser } from './getUserSaga.js';

export default function* rootSaga() {
  yield all([listenForGetUser()]);
}
