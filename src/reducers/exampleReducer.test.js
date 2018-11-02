import {exampleReducer} from './exampleReducer';
import * as actions from '../actions';

describe('exampleReducer', () => {
  it('should return a default state', () => {
    expect(exampleReducer(undefined, {})).toEqual({});
  });

  it('should store a successful payload', () => {
    const mockAction = actions.userInfoSuccess('Woo Hoo!');
    expect(exampleReducer(undefined, mockAction)).toEqual('Woo Hoo!');
  });

  it('should return an error object on failure', () => {
    const mockAction = actions.userInfoFailure('error message');

    expect(exampleReducer(undefined, mockAction)).toEqual({
      error: 'error message',
    });
  });
});
