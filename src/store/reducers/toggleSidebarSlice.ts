import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ToggleSidebarState {
  value: boolean;
}

const initialState: ToggleSidebarState = {
  value: false,
};

const toggleSidebarSlice = createSlice({
  name: 'toggle-sidebar',
  initialState,
  reducers: {
    changeToggleSidebar: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { changeToggleSidebar } = toggleSidebarSlice.actions;

export default toggleSidebarSlice.reducer;
