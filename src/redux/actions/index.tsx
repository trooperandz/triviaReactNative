import { RECEIVE_QUESTIONS } from './actionTypes';

export const fetchQuestions = async (dispatch) => {
  return (dispatch) => {};
};

export const receiveQuestions = (data) => {
  return {
    type: RECEIVE_QUESTIONS,
    payload: data.questions,
  };
};
