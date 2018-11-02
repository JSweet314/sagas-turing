import {call, all, put} from 'redux-saga/effects';
import {fetchHackerNewsList, fetchHackerNewsStory} from '../apiCalls';
import {hackerNewsStoriesSaga} from './hackerNewsStoriesSaga.js';
import * as actions from '../actions';

describe('hackerNewsStoriesSaga', () => {
  let generator;
  beforeAll(() => {
    generator = hackerNewsStoriesSaga();
  });

  it('should call fetchHackerNews', () => {
    expect(generator.next().value).toEqual(call(fetchHackerNewsList));
  });

  it('should yield calls to fetchHackerNewsStory for every story id', () => {
    expect(generator.next([1, 2]).value).toEqual(
      all([1, 2].map(storyId => call(fetchHackerNewsStory, storyId))),
    );
  });

  it('should put HEADLINE_SUCCESS on the stack with the results', () => {
    expect(generator.next([{}]).value).toEqual(
      put(actions.headlineSuccess([{}])),
    );
  });

  it('should be done', () => {
    expect(generator.next().done).toBe(true);
  });

  it('should put a headline failure action on the stack if appropriate', () => {
    generator = hackerNewsStoriesSaga();
    generator.next();
    expect(generator.throw(new Error('error')).value).toEqual(
      put(actions.headlineFailure('error')),
    );
  });
});
