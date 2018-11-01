import {call, all} from 'redux-saga/effects';
import {fetchHackerNews, fetchHackerStory} from '../apiCalls';

export function* getHackerStories() {
  try {
    const storyIds = yield call(fetchHackerNews);
    const headlines = yield call(getHackerStoryDetails, storyIds);
    return headlines;
  } catch (error) {
    yield call(console.log, error.message);
  }
}

export function* getHackerStoryDetails(storyIds) {
  try {
    const stories = yield all(
      storyIds.map(storyId => call(fetchHackerStory, storyId)),
    );
    const headlines = yield call(getHeadlines,stories);
    return headlines;
  } catch (error) {
    yield call(console.log, error.message);
  }
}

export const getHeadlines = stories =>
  stories
    .filter((story, index) => story && story.title !== undefined && index < 20)
    .map(story => story.title);
