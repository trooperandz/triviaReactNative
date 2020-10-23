import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: '',
  userName: '',
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
  },
});

export const { setGlobalError, setUserName } = app.actions;

export default app.reducer;
