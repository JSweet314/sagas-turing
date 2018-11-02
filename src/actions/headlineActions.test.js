import {headlineSuccess, headlineFailure} from './headlineActions.js';

describe('headline actions', () => {
  describe('headlineSuccess', () => {
    it('should return an action of type "HEADLINE_SUCCESS"', () => {
      const expected = {type: 'HEADLINE_SUCCESS', payload: {}};
      expect(headlineSuccess({})).toEqual(expected);
    });
  });

  describe('headlineFailure', () => {
    it('should return an action of type "HEADLINE_FAILURE"', () => {
      const expected = {type: 'HEADLINE_FAILURE', payload: 'error message'};
      expect(headlineFailure('error message')).toEqual(expected);
    });
  });
});
