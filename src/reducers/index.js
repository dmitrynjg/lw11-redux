import { combineReducers } from 'redux';
import modalWindowReducer from './modalWindow';
import usersTableReducer from './user';

const rootReducer = combineReducers({
	usersTableReducer,
	modalWindowReducer,
});

export default rootReducer;
