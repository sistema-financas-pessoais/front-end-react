/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';
import Routes from './routes';
import { useCurrentTheme } from './hooks/theme';
import { QueryClient, QueryClientProvider } from 'react-query';

useCurrentTheme();
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
);
