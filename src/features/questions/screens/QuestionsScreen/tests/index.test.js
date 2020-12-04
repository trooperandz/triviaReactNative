import React from 'react';
import { render } from '@testing-library/react-native';

import { QuestionsScreen } from '..';

const renderComponent = (props) => {
  return render(<QuestionsScreen />);
};

describe('QuestionsScreen', () => {
  it('should render a list of questions with the correct number', () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId('question-screen')).toHaveLength(0);
  });
});
