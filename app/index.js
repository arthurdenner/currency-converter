import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'redux-zero/react';
import Navigation from './config/routes';
import store from './config/store';
import { AlertProvider } from './components/Alert';

EStyleSheet.build({});

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Navigation />
    </AlertProvider>
  </Provider>
);
