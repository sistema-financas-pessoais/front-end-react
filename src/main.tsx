/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';
import Routes from './routes';
import { useCurrentTheme } from './hooks/theme';

useCurrentTheme();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
);
