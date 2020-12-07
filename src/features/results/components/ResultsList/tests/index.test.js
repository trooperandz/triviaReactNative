import React from 'react';
import { render } from '@testing-library/react-native';

import { ResultsList } from '../index';

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

const renderComponent = (props) => render(<ResultsList {...props} />);

describe('ResultsList', () => {
  it('should render the correct number of cards', () => {
    const { queryAllByTestId } = renderComponent({ questions });

    expect(queryAllByTestId('results-card')).toHaveLength(2);
  });

  it('should render a checkmark icon for correct answers', () => {
    const { getByTestId } = renderComponent({
      questions: [questions[0]],
    });

    expect(getByTestId('checkmark-icon')).toBeDefined();
  });

  it('should render a minus icon for incorrect answers', () => {
    const { getByTestId } = renderComponent({
      questions: [questions[1]],
    });

    expect(getByTestId('minus-icon')).toBeDefined();
  });

  it('should render the correct answer text if the incorrect answer was selected', () => {
    const { getByTestId } = renderComponent({
      questions: [questions[1]],
    });

    expect(getByTestId('correct-answer')).toBeDefined();
  });
});
