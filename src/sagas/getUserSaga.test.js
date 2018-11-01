import { listenForGetUser, getUserSaga } from './getUserSaga';
import * as actions from '../actions';
import { fetchUserInfo } from '../apiCalls/fetchUserInfo';
import { takeLatest, call, put } from 'redux-saga/effects';
import {getHackerStories} from './getHackerStories.js';

describe('listenForGetUser', () => {
  let generator;
  beforeAll(() => {
    generator = listenForGetUser();
  });

  it('should take the latest GET_USER_INFO action', () => {
    expect(generator.next().value).toEqual(
      takeLatest('GET_USER_INFO', getUserSaga)
    );
  });

  it('should be done', () => {
    expect(generator.next().done).toBe(true);
  });
});

describe('getUserSaga', () => {
  let generator, mockAction;
  beforeAll(() => {
    mockAction = actions.getUserInfo('jsweet314');
    generator = getUserSaga(mockAction);
  });
  it('should call an api', () => {
    expect(generator.next().value).toEqual(call(fetchUserInfo, 'jsweet314'));
	});

	it('should invoke the getHackerStories saga', () => {
		const expected = call(getHackerStories);
		expect(generator.next({ username: 'jsweet314' }).value).toEqual(expected);
	});

  it('should put an action on the stack', () => {
    expect(generator.next([{}]).value).toEqual(
      put(actions.exampleSuccessAction({username: 'jsweet314', stories: [{}]}))
    );
  });

  it('should be done', () => {
    expect(generator.next().done).toBe(true);
  });

  it('should put an error action if appropriate', () => {
    const generator = getUserSaga(mockAction);
    const expected = put(actions.exampleFailureAction('error'));
    generator.next();
    expect(generator.throw(new Error('error')).value).toEqual(expected);
  });
});
