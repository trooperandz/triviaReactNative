import { createSlice } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

import { triviaAPI } from 'utils';

const initialState = {
  questions: [],
};

const questions = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    receiveTriviaQuestions(state, action) {
      state.questions = action.payload.questions;
    },
    updateTriviaQuestion(state, action) {
      const { index, value } = action.payload;
      // @ts-ignore
      state.questions[index].selected_answer = value;
    },
    clearQuestionSliceState(state) {
      state.questions = [];
    },
  },
});

export const {
  clearQuestionSliceState,
  receiveTriviaQuestions,
  updateTriviaQuestion,
} = questions.actions;

export const getTriviaQuestions = (params: any, callback?: () => void) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await triviaAPI.get('/', { params });

      if (!response.data) {
        throw new Error('Sorry, the API did not send back any data.');
      }

      const { data: { response_code: responseCode, results } = {} } = response;

      // Response code 0 is success
      if (responseCode !== 0) {
        let errorMessage = '';

        switch (responseCode) {
          case 1:
            errorMessage =
              "Sorry, the API doesn't have enough questions for your query";
            break;
          case 2:
            errorMessage = 'Sorry, your query contained an invalid parameter';
            break;
          default:
            errorMessage = 'Sorry, there was an unknown API error';
        }

        throw new Error(errorMessage);
        // dispatch(setApiError(errorMessage));
      } else {
        dispatch(receiveTriviaQuestions({ questions: results }));
        callback && callback();
      }
    } catch (error) {
      callback && callback();
      console.log({ error });
    }
  };
};

export const updateSelectedAnswer = (
  index: number,
  value: string,
  callback?: () => void,
) => {
  return async (dispatch: Dispatch) => {
    dispatch(updateTriviaQuestion({ index, value }));
    callback && callback();
  };
};

export default questions.reducer;
