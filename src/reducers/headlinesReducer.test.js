import {headlinesReducer} from './headlinesReducer.js';
import * as actions from '../actions';

describe('headlinesReducer', () => {
  it('should return an array by default', () => {
    expect(headlinesReducer(undefined, {})).toEqual([]);
  });

  it('should return the payload for action type HEADLINE_SUCCESS', () => {
    const mockAction = actions.headlineSuccess([1, 2]);

    expect(headlinesReducer(undefined, mockAction)).toEqual([1, 2]);
  });

  it('should return an error object for action type HEADLINE_FAILURE', () => {
    const mockAction = actions.headlineFailure('error message');

    expect(headlinesReducer(undefined, mockAction)).toEqual({
      error: 'error message',
    });
  });
});
