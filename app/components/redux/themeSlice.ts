// src/redux/themeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  isDarkMode: boolean;
}

const initialState: ThemeState = {
  isDarkMode: false, // Defaults to light mode
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    setTheme: (state,action: PayloadAction<'dark' | 'light'>) => {
      state.isDarkMode = action.payload === 'dark';
    },
  },
});

export const { toggleDarkMode, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
