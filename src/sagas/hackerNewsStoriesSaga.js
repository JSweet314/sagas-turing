import {call, put, all} from 'redux-saga/effects';
import {fetchHackerNewsList, fetchHackerNewsStory} from '../apiCalls';
import * as actions from '../actions';

export function* hackerNewsStoriesSaga() {
  try {
    const storyIds = yield call(fetchHackerNewsList);
    const stories = yield all(
      storyIds.map(storyId => call(fetchHackerNewsStory, storyId)),
    );
    yield put(actions.headlineSuccess(stories));
  } catch (error) {
    yield put(actions.headlineFailure(error.message));
  }
}
