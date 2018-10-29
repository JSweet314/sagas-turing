import { combineReducers } from 'redux';
import { exampleReducer as user } from './exampleReducer';

export default combineReducers({
  user,
  someOtherReducer: () => ({})
});
