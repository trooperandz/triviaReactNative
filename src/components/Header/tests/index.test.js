import React from 'react';
import { render } from '@testing-library/react-native';

import { Header } from '../index';

describe('Header', () => {
  it('should render a back icon if backOption is provided', () => {
    const { getByTestId } = render(<Header backOption />);

    expect(getByTestId('back-icon')).toBeDefined();
  });
});
