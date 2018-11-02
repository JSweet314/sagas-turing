import {userInfoSuccess, userInfoFailure, getUserInfo} from './userActions';

describe('Actions', () => {
  describe('getUserInfo', () => {
    it('should return an action object of type "GET_USER_INFO"', () => {
      const expected = {
        type: 'GET_USER_INFO',
        payload: 'username',
      };
      expect(getUserInfo('username')).toEqual(expected);
    });
  });

  describe('userInfoSuccess', () => {
    it('should return an action object of type "USER_INFO_SUCCESS"', () => {
      const expected = {
        type: 'USER_INFO_SUCCESS',
        payload: 'test',
      };
      expect(userInfoSuccess('test')).toEqual(expected);
    });
  });

  describe('userInfoFailure', () => {
    it('should return an action object of type "USER_INFO_FAILURE"', () => {
      const expected = {
        type: 'USER_INFO_FAILURE',
        payload: 'test',
      };
      expect(userInfoFailure('test')).toEqual(expected);
    });
  });
});
