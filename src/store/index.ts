import { configureStore } from '@reduxjs/toolkit';
import toggleSidebarReducer from './reducers/toggleSidebarSlice';
import tokenReducer from './reducers/tokenSlice';

const store = configureStore({
  reducer: {
    toggleSidebar: toggleSidebarReducer,
    token: tokenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
