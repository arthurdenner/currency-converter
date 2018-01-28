import React from 'react';
import { Provider } from 'redux-zero/react';
import Navigation from './config/routes';
import store from './config/store';
import { AlertProvider } from './components/Alert';

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Navigation />
    </AlertProvider>
  </Provider>
);
