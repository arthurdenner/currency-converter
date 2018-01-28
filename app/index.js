import React from 'react';
import { Provider } from 'redux-zero/react';
import { ThemeProvider } from 'styled-components';
import Navigation from './config/routes';
import store from './config/store';
import { AlertProvider } from './components/Alert';

const theme = {
  disabled: '#F0F0F0',
  lightGray: '#E2E2E2',
  darkGray: '#898989',
  darkestGray: '#343434',
  gray: '#797979',
  white: '#FFFFFF',
};

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </AlertProvider>
  </Provider>
);
