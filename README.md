# Sagas Tutorial

## Bootstrapped on top of Create-React-App

Includes:

Redux, and
testing w/ Jest + Enzyme.

### Installation/Setup

1. Install the `redux-saga` middleware via yarn or npm.

```
yarn add redux-saga
    or
npm install --save redux-saga
```

2. Create a sagas directory with an index file in the src of your redux app

```
cd yourProject/src
mkdir sagas
touch sagas/index.js
```

3. Apply the middleware where you configure your store. For example

```
// src/store.js

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  // sagaMiddleware.run();
  return store;
}

export default configureStore();
```

4. Create your rootSaga, which will compose/consume all of your apps sagas.

```
// src/sagas/index.js

import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([
    // invoke "listening" sagas here
  ]);
}

export default rootSaga;
```

5. Start writing sagas! Here is the common pattern:

```
// src/sagas/mySaga.js

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchUserInfo } from '../apiCalls';
import * as actions from '../actions';

export function* mySaga() {
  yield takeLatest('SOME_ASYNC_ACTION', asyncProcedure);
}

export function* asyncProcedure(action) {
  try {
    const result = yield call(fetchUserInfo(action.payload)
    yield put(actions.exampleSuccessAction(result));
  } catch (error) {
    yield put(actions.exampleFailureAction(error.message);
  }
}
```

6. Don't forget to add your sagas to the root saga

```
// src/sagas/index.js

import { all } from 'redux-saga/effects';
import { mySaga } from './mySaga.js

export function* rootSaga() {
  yield all([
    mySaga()
  ]);
}

export default rootSaga;
```

### Testing Sagas

Easy to test listening sagas

```
// src/sagas/mySaga.test.js

import { put, call, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';
import { fetchUserInfo } from '../apiCalls';
import { getUserSaga, getUserInfo } from './getUserSaga';

describe('getUserSaga', () => {
  let generator;
  beforeAll(() => {
    generator = getUserSaga();
  });

  it('should take the latest GET_USER_INFO', () => {
    expect(generator.next().value).toEqual(
      takeLatest('GET_USER_INFO', getUserInfo)
    );
  });

  it('should be done!', () => {
    expect(generator.next().done).toBe(true);
  });
});
```

A little more involved to test procedural sagas.

```
describe('getUserInfo', () => {
  let generator, mockAction, mockUsername;
  beforeAll(() => {
    mockUsername = 'jsweet314';
    mockAction = actions.getUserInfo(mockUsername);
    generator = getUserInfo(mockAction);
  });

  it('should call fetchUserInfo with the actions payload', () => {
    expect(generator.next().value).toEqual(
      call(fetchUserInfo, mockAction.payload)
    );
  });

  it('should put exampleSuccessAction on the stack', () => {
    expect(generator.next({ username: 'jsweet314' }).value).toEqual(
      put(actions.exampleSuccessAction({ username: 'jsweet314' }))
    );
  });

  it('should be done', () => {
    expect(generator.next().done).toBe(true);
  });

  it('should throw an error if appropriate', () => {
    const generator = getUserInfo(mockAction);
    const expected = put(actions.exampleFailureAction('error'));

    generator.next();

    expect(generator.throw(new Error('error')).value).toEqual(expected);
  });
});
```
