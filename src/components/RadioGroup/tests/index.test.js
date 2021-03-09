import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import { RadioGroup, RADIO_WRAPPER_TEST_ID } from '../index';

const defaultProps = {
  options: [
    {
      value: 'test1',
      title: 'test1',
    },
    {
      value: 'test2',
      title: 'test2',
    },
    {
      value: 'test3',
      title: 'test3',
    },
  ],
  onSelect: jest.fn(),
};

const renderComponent = (props) => {
  return render(<RadioGroup {...defaultProps} {...props} />);
};

describe('RadioGroup', () => {
  it('should render the correct number of radio buttons', () => {
    const { queryAllByTestId } = renderComponent();

    expect(queryAllByTestId(RADIO_WRAPPER_TEST_ID)).toHaveLength(3);
  });

  it('should fire the onPress event with the correct arguments', () => {
    const mockFn = jest.fn();
    const { getByText } = renderComponent({ onSelect: mockFn });
    fireEvent.press(getByText('test2'));

    expect(mockFn).toHaveBeenCalledWith('test2', 1);
  });
});
