import { put, call, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';
import { fetchUserInfo } from '../apiCalls';
import { getUserSaga, getUserInfo } from './getUserSaga';

describe('getUserSaga', () => {
  let generator;
  beforeAll(() => {
    generator = getUserSaga();
  });

  it('should take the latest GET_USER_INFO', () => {
    expect(generator.next().value).toEqual(
      takeLatest('GET_USER_INFO', getUserInfo)
    );
  });

  it('should be done!', () => {
    expect(generator.next().done).toBe(true);
  });
});

describe('getUserInfo', () => {
  let generator, mockAction, mockUsername;
  beforeAll(() => {
    mockUsername = 'jsweet314';
    mockAction = actions.getUserInfo(mockUsername);
    generator = getUserInfo(mockAction);
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
    const generator = getUserInfo(mockAction);
    const expected = put(actions.exampleFailureAction('error'));

    generator.next();

    expect(generator.throw(new Error('error')).value).toEqual(expected);
  });
});
