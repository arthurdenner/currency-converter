import { AsyncStorage } from 'react-native';
import createStore from 'redux-zero';
import { applyMiddleware } from 'redux-zero/middleware';
import logger from 'redux-zero-logger';
import persist from 'redux-zero-persist';
import { initialState as currencies } from '../store/currencies';
import { initialState as theme } from '../store/theme';

const persistMiddleware = persist(
  { key: '__currency_converter__', storage: AsyncStorage },
  (err, state) => {
    if (err) {
      console.error(err);
    } else {
      // eslint-disable-next-line
      store.setState(state);
    }
  }
);

const initialState = {
  currencies,
  theme,
};

const middlewares = [persistMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger());
}

const store = createStore(initialState, applyMiddleware(...middlewares));

export default store;
