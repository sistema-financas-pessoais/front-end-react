/* eslint-disable react-hooks/rules-of-hooks */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { useLocalStorageToken } from '../../hooks/token';

interface TokenState {
  value: string | null;
}

const token = useLocalStorageToken();

const initialState: TokenState = {
  value: token,
};

const tokenSlice = createSlice({
  name: 'toggle-sidebar',
  initialState,
  reducers: {
    changeToken: (state, action: PayloadAction<string | null>) => {
      state.value = action.payload;
    },
  },
});

export const { changeToken } = tokenSlice.actions;

export default tokenSlice.reducer;
