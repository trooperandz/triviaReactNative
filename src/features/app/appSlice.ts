import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  app: '',
};

const app = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
    },
  },
});

export const { setUser } = app.actions;

export default app.reducer;
