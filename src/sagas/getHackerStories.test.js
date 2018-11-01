import { call, all } from 'redux-saga/effects';
import {fetchHackerNews, fetchHackerStory} from '../apiCalls';
import { getHackerStories, getHackerStoryDetails, getHeadlines} from './getHackerStories.js';

describe('getHackerStories', () => {
  let generator;
	beforeAll(() => {
		generator = getHackerStories();
	});

	it('should call fetchHackerNews', () => {
    expect(generator.next().value).toEqual(call(fetchHackerNews));
	});

	it('should call getHackerStoryDetails with the storyIds', () => {
		expect(generator.next([1,2]).value).toEqual(call(getHackerStoryDetails, [1,2]));
	});

	it('should yield the resulting headlines', () => {
		expect(generator.next(["test", "test2"]).value).toEqual(["test", "test2"]);
	});

	it('should be done', () => {
		expect(generator.next().done).toBe(true);
	});

	it('should console.log an error if appropriate', () => {
		generator = getHackerStories();
		generator.next();
		expect(generator.throw(new Error('error')).value).toEqual(call(console.log, 'error'));
	});
});

describe('getHackerStoryDetails', () => {
	let generator, mockStoryIds;
	beforeAll(() => {
		mockStoryIds = [1,2];
		generator = getHackerStoryDetails(mockStoryIds);
	});

	it('should yield an array of calls to the fetchHackerStory function', () => {
	  const expected = all(mockStoryIds.map(storyId => call(fetchHackerStory, storyId)));
	  expect(generator.next().value).toEqual(expected);	
	});

	it('should call getHeadlines with the stories', () => {
		expect(generator.next([{}]).value).toEqual(call(getHeadlines, [{}]));
	});

	it('should be done and return the headlines', () => {
		expect(generator.next([{}])).toEqual({value: [{}], done: true});	
	});
	
	it('should console.log an error if appropriate', () => {
		generator = getHackerStoryDetails(mockStoryIds);
		generator.next();
		expect(generator.throw(new Error('error')).value).toEqual(call(console.log, 'error'));
	});
});
