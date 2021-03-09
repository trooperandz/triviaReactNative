import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { renderWithProvider } from 'utils/testUtils';

import { QuestionsScreen, QUESTION_SCREEN_TEST_ID } from '../index';

const renderComponent = (props) => {
  return renderWithProvider(<QuestionsScreen {...props} />);
};

describe('QuestionsScreen', () => {
  it('should render the correct number of questions', () => {
    const { queryAllByTestId } = renderComponent();

    expect(queryAllByTestId(QUESTION_SCREEN_TEST_ID)).toHaveLength(2);
  });

  it('should reveal the submit button and execute navigate on press', () => {
    const mockNavigation = { navigate: jest.fn() };
    const { getByText, getByTestId } = renderComponent({
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
