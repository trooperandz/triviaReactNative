import React from 'react';

import { renderWithProvider } from 'utils/testUtils';

import {
  ResultsList,
  CHECKMARK_ICON_TEST_ID,
  CORRECT_ANSWER_TEST_ID,
  MINUS_ICON_TEST_ID,
  RESULTS_CARD_TEST_ID,
} from '../index';

const questions = [
  {
    category: 'General',
    type: 'boolean',
    difficulty: 'easy',
    question: 'question 1',
    correct_answer: 'D',
    incorrect_answers: ['A', 'B', 'C'],
    selected_answer: 'D',
  },
  {
    category: 'Geography',
    type: 'boolean',
    difficulty: 'medium',
    question: 'question 2',
    correct_answer: 'H',
    incorrect_answers: ['E', 'F', 'G'],
    selected_answer: 'F',
  },
];

const renderComponent = (props) =>
  renderWithProvider(<ResultsList {...props} />);

describe('ResultsList', () => {
  it('should render the correct number of cards', () => {
    const { queryAllByTestId } = renderComponent({ questions });

    expect(queryAllByTestId(RESULTS_CARD_TEST_ID)).toHaveLength(2);
  });

  it('should render a checkmark icon for correct answers', () => {
    const { getByTestId } = renderComponent({
      questions: [questions[0]],
    });

    expect(getByTestId(CHECKMARK_ICON_TEST_ID)).toBeDefined();
  });

  it('should render a minus icon for incorrect answers', () => {
    const { getByTestId } = renderComponent({
      questions: [questions[1]],
    });

    expect(getByTestId(MINUS_ICON_TEST_ID)).toBeDefined();
  });

  it('should render the correct answer text if the incorrect answer was selected', () => {
    const { getByTestId } = renderComponent({
      questions: [questions[1]],
    });

    expect(getByTestId(CORRECT_ANSWER_TEST_ID)).toBeDefined();
  });
});
