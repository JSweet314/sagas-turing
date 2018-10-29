import { listenForFetchUser, fetchUserSaga } from './exampleSaga';
import { put, call, takeLatest } from 'redux-saga/effects';
import { fetchUserInfo } from '../apiCalls/fetchUserInfo';
import * as actions from '../actions';

describe('listenForFetchUser', () => {
  let generator;
  beforeAll(() => {
    generator = listenForFetchUser();
  });

  it('should take the latest GET_USER_INFO', () => {
    expect(generator.next().value).toEqual(
      takeLatest('GET_USER_INFO', fetchUserSaga)
    );
  });

  it('shoudl be done!', () => {
    expect(generator.next().done).toBe(true);
  });
});

describe('fetchUserSaga', () => {
  let generator, mockAction, mockUsername;
  beforeAll(() => {
    mockUsername = 'jsweet314';
    mockAction = actions.getUserInfo(mockUsername);
    generator = fetchUserSaga(mockAction);
  });

  it('should call fetchUserInfo with the actions payload', () => {
    expect(generator.next().value).toEqual(
      call(fetchUserInfo, mockAction.payload)
    );
  });

  it('should put exampleSuccessAction on the stack', () => {
    expect(generator.next({ username: 'jsweet314' }).value).toEqual(
      put(actions.exampleSuccessAction({ username: 'jsweet314' }))
    );
  });

  it('should be done', () => {
    expect(generator.next().done).toBe(true);
  });

  it('should throw an error if appropriate', () => {
    const generator = fetchUserSaga(mockAction);
    const expected = put(actions.exampleFailureAction('error'));

    generator.next();

    expect(generator.throw(new Error('error')).value).toEqual(expected);
  });
});
