import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: '',
  userName: '',
  isGameCompleted: false,
};

const app = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setGlobalError(state, action) {
      state.error = action.payload.error;
    },
    setUserName(state, action) {
      state.userName = action.payload.userName;
    },
    setIsGameCompleted(state, action) {
      state.isGameCompleted = action.payload;
    },
    clearAppSliceState(state) {
      state.error = '';
      state.userName = '';
      state.isGameCompleted = false;
    },
  },
});

export const {
  clearAppSliceState,
  setIsGameCompleted,
  setGlobalError,
  setUserName,
} = app.actions;

export default app.reducer;
