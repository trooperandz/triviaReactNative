import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import { TextInput } from '../';

describe('TextInput', () => {
  it('should fire the onChange event on a change text event', () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(<TextInput onChangeText={mockFn} />);

    fireEvent.changeText(getByTestId('text-input'), 'test');
    expect(mockFn).toHaveBeenCalledWith('content');
  });
});
