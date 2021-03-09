import React from 'react';
import { render } from '@testing-library/react-native';

import { RadioButton, RADIO_INNER_TEST_ID } from '../index';

describe('RadioButton', () => {
  it('should show selected status if isSelected is true', () => {
    const { getByTestId } = render(<RadioButton isSelected />);

    expect(getByTestId(RADIO_INNER_TEST_ID)).toBeDefined();
  });
});
