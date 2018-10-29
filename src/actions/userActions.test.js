import {
  exampleSuccessAction,
  exampleFailureAction,
  getUserInfo
} from './userActions';

describe('Actions', () => {
  describe('getUserInfo', () => {
    it('should return an action object of type "GET_USER_INFO"', () => {
      const expected = {
        type: 'GET_USER_INFO',
        payload: 'username'
      };
      expect(getUserInfo('username')).toEqual(expected);
    });
  });

  describe('exampleSuccessAction', () => {
    it('should return an action object of type "EXAMPLE_SUCCESS_ACTION"', () => {
      const expected = {
        type: 'EXAMPLE_SUCCESS_ACTION',
        payload: 'test'
      };
      expect(exampleSuccessAction('test')).toEqual(expected);
    });
  });

  describe('exampleFailureAction', () => {
    it('should return an action object of type "EXAMPLE_FAILURE_ACTION"', () => {
      const expected = {
        type: 'EXAMPLE_FAILURE_ACTION',
        payload: 'test'
      };
      expect(exampleFailureAction('test')).toEqual(expected);
    });
  });
});
