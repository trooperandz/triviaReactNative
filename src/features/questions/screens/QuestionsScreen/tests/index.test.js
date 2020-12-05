import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { renderWithProvider } from 'utils/testUtils';

import { QuestionsScreen } from '../index';

const state = {
  questions: {
    questions: [
      {
        category: 'General',
        type: 'boolean',
        difficulty: 'easy',
        question: 'question 1',
        correct_answer: 'd',
        incorrect_answers: ['a', 'b', 'c'],
        selected_answer: 'a',
      },
      {
        category: 'Geography',
        type: 'boolean',
        difficulty: 'medium',
        question: 'question 2',
        correct_answer: 'h',
        incorrect_answers: ['e', 'f', 'g'],
        selected_answer: 'h',
      },
    ],
  },
};

const renderComponent = (props) => {
  return renderWithProvider(<QuestionsScreen {...props} />, state);
};

describe('QuestionsScreen', () => {
  it('should render the correct number of questions', () => {
    const { queryAllByTestId } = renderComponent();

    expect(queryAllByTestId('question-screen')).toHaveLength(2);
  });

  it('should render the correct number of pagination dots', () => {
    const { queryAllByTestId } = renderComponent();

    expect(queryAllByTestId('pagination-dot')).toHaveLength(2);
  });

  it('should should show the results submit button if all questions are answered', () => {
    const { getByText, getByTestId, queryByTestId } = renderComponent();

    expect(queryByTestId('button')).toBeNull();

    fireEvent.press(getByText('D'));
    fireEvent.press(getByText('H'));

    expect(getByTestId('button')).toBeDefined();
  });
});
