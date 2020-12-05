import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([thunk]);

const initialState = {
  app: {},
  questions: {},
};

export const renderWithProvider = (
  children: JSX.Element,
  state: { [key: string]: any },
) => {
  const test = { ...initialState, ...state };
  const store = mockStore(test);

  return render(<Provider store={store}>{children}</Provider>);
};
