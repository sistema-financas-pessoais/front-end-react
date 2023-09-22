import { configureStore } from '@reduxjs/toolkit';
import toggleSidebarReducer from './reducers/toggleSidebarSlice';

const store = configureStore({
  reducer: {
    toggleSidebar: toggleSidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
