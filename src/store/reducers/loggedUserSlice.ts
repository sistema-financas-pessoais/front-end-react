import { LoggedUser } from '../../@types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface LoggedUserState {
  value: LoggedUser | null;
}

const initialState: LoggedUserState = {
  value: null,
};

const loggedUserSlice = createSlice({
  name: 'logged-user',
  initialState,
  reducers: {
    changeLoggedUser: (state, action: PayloadAction<LoggedUser | null>) => {
      state.value = action.payload;
    },
    clearLoggedUser: (state) => {
      state.value = null;
    },
  },
});

export const { changeLoggedUser, clearLoggedUser } = loggedUserSlice.actions;

export default loggedUserSlice.reducer;
