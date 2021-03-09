import React from 'react';
import { renderWithProvider } from 'utils/testUtils';

import GlobalError, { ERROR_MODAL_TEST_ID } from '../index';

const renderComponent = (state) => renderWithProvider(<GlobalError />, state);

describe('GlobalError', () => {
  it('should show the error modal if an error has occurred', () => {
    const { getByTestId } = renderComponent({ app: { error: 'test error' } });

    expect(getByTestId(ERROR_MODAL_TEST_ID)).toBeDefined();
  });

  it('should not show the error modal if no error has occurred', () => {
    const { queryByTestId } = renderComponent({ app: { error: '' } });

    expect(queryByTestId(ERROR_MODAL_TEST_ID)).toBeNull();
  });
});
