import { combineReducers } from 'redux';
import { exampleReducer as user } from './exampleReducer';
import { headlinesReducer as headlines} from './headlinesReducer';

export default combineReducers({
	user,
	headlines
});
