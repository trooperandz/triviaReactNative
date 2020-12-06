import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { useDispatch } from 'react-redux';
import { renderWithProvider } from 'utils/testUtils';

import { QuestionsScreen } from '../index';

// jest.mock('react-redux');

const state = {
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

const renderComponent = (props) => {
  return renderWithProvider(<QuestionsScreen {...props} />, state);
};

describe('QuestionsScreen', () => {
  it('should render the correct number of questions', () => {
    const { queryAllByTestId } = renderComponent();

    expect(queryAllByTestId('question-screen')).toHaveLength(2);
  });

  it('should reveal the submit button and execute navigate properly', () => {
    const mockNavigation = { navigate: jest.fn() };
    const { getByText, getByTestId, queryByTestId } = renderComponent({
      navigation: mockNavigation,
    });

    // All questions must be answered before submit button is revealed
    fireEvent.press(getByText('D'));
    fireEvent.press(getByText('H'));

    expect(getByTestId('button')).toBeDefined();

    fireEvent.press(getByTestId('button'));

    expect(mockNavigation.navigate).toHaveBeenCalled();
  });
});
