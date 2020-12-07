import React from 'react';
import { fireEvent } from '@testing-library/react-native';

import { renderWithProvider } from 'utils/testUtils';
import { ResultsScreen } from '../index';

describe('ResultsScreen', () => {
  it('should call navigate on the play again button press', () => {
    const mockNavigation = { navigate: jest.fn() };
    const { getByTestId } = renderWithProvider(
      <ResultsScreen navigation={mockNavigation} />,
    );

    fireEvent.press(getByTestId('button'));

    expect(mockNavigation.navigate).toHaveBeenCalled();
  });
});
