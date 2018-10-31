import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

export function configureStore() {
  const store = createStore(rootReducer, composeWithDevTools());
  return store;
}

export default configureStore();
