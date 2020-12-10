import { createStore } from 'redux';
import rootReducer from './reducers';

const link = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, link);

export default store;
