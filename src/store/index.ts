import { configureStore } from '@reduxjs/toolkit';
import toggleSidebarReducer from './reducers/toggleSidebarSlice';
import tokenReducer from './reducers/tokenSlice';
import loggedUserReducer from './reducers/loggedUserSlice';

const store = configureStore({
  reducer: {
    toggleSidebar: toggleSidebarReducer,
    token: tokenReducer,
    loggedUser: loggedUserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
