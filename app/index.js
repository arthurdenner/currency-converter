import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'redux-zero/react';
import Navigation from './config/routes';
import store from './config/store';
import { AlertProvider } from './components/Alert';

EStyleSheet.build({
  $border: '#E2E2E2',
  $darkText: '#343434',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  $white: '#FFFFFF',

  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',
});

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Navigation />
    </AlertProvider>
  </Provider>
);
