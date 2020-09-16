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
  },
});

export const { receiveTriviaQuestions } = questions.actions;

export const getTriviaQuestions = (params: any, callback?: () => void) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await triviaAPI.get('/', { params });
      console.log(response.data);
      if (!response.data) {
        throw new Error('Sorry, the API did not send back any data.');
      }

      const { data: { response_code: responseCode, results } = {} } = response;
      console.log({ results });
      console.log({ responseCode });

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

export default questions.reducer;
