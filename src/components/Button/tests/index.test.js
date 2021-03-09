import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import { Button, BUTTON_SPINNER_TEST_ID } from '../index';

const renderComponent = (props) => {
  return render(
    <Button onPress={() => {}} type="primary" {...props}>
      Test Text
    </Button>,
  );
};

describe('Button', () => {
  it('should fire the onPress event handler when pressed', () => {
    const mockFn = jest.fn();
    const { getByText } = renderComponent({ onPress: mockFn });
    fireEvent.press(getByText('Test Text'));

    expect(mockFn).toHaveBeenCalled();
  });

  it('should render the correct text', () => {
    const { getByText } = renderComponent();

    expect(getByText('Test Text')).toBeDefined();
  });

  it('should only show the loading spinner if loading is true', () => {
    const { getByTestId, queryByText } = renderComponent({ isLoading: true });

    expect(getByTestId(BUTTON_SPINNER_TEST_ID)).toBeDefined();
    expect(queryByText('Test Text')).toBeNull();
  });
});
