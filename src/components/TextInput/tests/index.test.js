import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import { TextInput, TEXT_INPUT_TEST_ID } from '../';

describe('TextInput', () => {
  it('should fire the onChange event on a change text event', () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(<TextInput onChangeText={mockFn} />);

    fireEvent.changeText(getByTestId(TEXT_INPUT_TEST_ID), 'content');
    expect(mockFn).toHaveBeenCalledWith('content');
  });
});
