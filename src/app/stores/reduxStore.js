import {createStore, combineReducers, applyMiddleware} from 'redux';

import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

import {reduxReducer} from '../reducers/reduxReduser';

const middleware = applyMiddleware(promiseMiddleware(), logger());
const reducers = combineReducers({
    posts : reduxReducer
});

const store = createStore(reducers, middleware);

export default store;