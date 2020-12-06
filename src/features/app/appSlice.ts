import { createSlice } from '@reduxjs/toolkit';
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
    setGlobalError(state, action) {
      state.error = action.payload;
    },
    setUserName(state, action) {
      state.userName = action.payload.userName;
    },
    clearAppSliceState(state) {
      state.error = '';
      state.userName = '';
    },
  },
});

export const { clearAppSliceState, setGlobalError, setUserName } = app.actions;

export const resetGame = (callback: () => void) => {
  return (dispatch: Dispatch) => {
    dispatch(clearAppSliceState());
    dispatch(clearQuestionSliceState());
    callback && callback();
  };
};

export default app.reducer;
