import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: '',
};

const questions = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setUser(state, action) {
      state.questions = action.payload.questions;
    },
  },
});

export const { setUser } = questions.actions;

export default questions.reducer;
