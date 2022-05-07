import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import ab from './Reducer';

const store = createStore(ab, applyMiddleware(thunk));
export default store;
