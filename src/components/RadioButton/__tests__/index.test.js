import React from 'react';
import { render } from '@testing-library/react-native';

import { RadioButton } from '../index';

describe('RadioButton', () => {
  it('should show selected status if isSelected is true', () => {
    const { getByTestId } = render(<RadioButton isSelected />);

    expect(getByTestId('radio-inner')).toBeDefined();
  });
});
