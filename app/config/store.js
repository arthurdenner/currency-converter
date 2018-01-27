import createStore from 'redux-zero';
import { applyMiddleware } from 'redux-zero/middleware';
import logger from 'redux-zero-logger';
import { initialState as currencies } from '../store/currencies';
import { initialState as theme } from '../store/theme';

const initialState = {
  currencies,
  theme,
};

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger());
}

const store = createStore(initialState, applyMiddleware(...middlewares));

export default store;
