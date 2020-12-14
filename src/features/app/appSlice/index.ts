import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

import { clearQuestionSliceState } from 'features/questions/questionsSlice';

const initialState = {
  error: '',
  userName: '',
};

const app = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setGlobalError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setUserName(state, action: PayloadAction<{ userName: string }>) {
      state.userName = action.payload.userName;
    },
    clearAppSliceState(state) {
      state.error = '';
      state.userName = '';
    },
  },
});

export const { clearAppSliceState, setGlobalError, setUserName } = app.actions;

export const resetGame = () => {
  return (dispatch: Dispatch) => {
    dispatch(clearAppSliceState());
    dispatch(clearQuestionSliceState());
  };
};

export default app.reducer;
