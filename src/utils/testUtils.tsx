import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([thunk]);

const initialState = {
  app: {},
  questions: {
    questions: [
      {
        category: 'General',
        type: 'boolean',
        difficulty: 'easy',
        question: 'question 1',
        correct_answer: 'D',
        incorrect_answers: ['A', 'B', 'C'],
        selected_answer: 'A',
      },
      {
        category: 'Geography',
        type: 'boolean',
        difficulty: 'medium',
        question: 'question 2',
        correct_answer: 'H',
        incorrect_answers: ['E', 'F', 'G'],
        selected_answer: 'H',
      },
    ],
  },
};

export const renderWithProvider = (
  children: JSX.Element,
  state: { [key: string]: any },
  store?: any,
) => {
  const testStore = { ...initialState, ...state };
  // const store = store || mockStore(testStore);

  return render(
    <Provider store={store || mockStore(testStore)}>{children}</Provider>,
  );
};
