import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: '',
  user: '',
};

const app = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setGlobalError(state, action) {
      state.error = action.payload.error;
    },
  },
});

export const { setGlobalError } = app.actions;

export default app.reducer;
