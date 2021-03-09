import React from 'react';
import { act, fireEvent } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({});

import {
  HomeScreen,
  ERROR_CATEGORY_TEST_ID,
  ERROR_NAME_TEST_ID,
} from '../index';
import { BUTTON_TEST_ID } from 'components/Button';
import { TEXT_INPUT_TEST_ID } from 'components/TextInput';
import { renderWithProvider } from 'utils/testUtils';

describe('HomeScreen', () => {
  let renderedComponent;
  let button;
  let input;
  let radioButton;

  beforeEach(() => {
    renderedComponent = renderWithProvider(<HomeScreen />, null, store);
    button = renderedComponent.getByTestId(BUTTON_TEST_ID);
    input = renderedComponent.getByTestId(TEXT_INPUT_TEST_ID);
    radioButton = renderedComponent.getByText('Sports');
  });

  afterEach(() => {
    store.clearActions();
  });

  it('should show the correct error label and dispatch a global error if no category has been selected', () => {
    const { getByTestId } = renderedComponent;
    act(() => fireEvent.changeText(input, 'Matt'));
    act(() => fireEvent.press(button));

    expect(getByTestId(ERROR_CATEGORY_TEST_ID)).toBeDefined();
    expect(store.getActions()[0].type).toEqual('app/setGlobalError');
  });

  it('should show the correct error label and dispatch a global error if no name has been entered', () => {
    const { getByTestId } = renderedComponent;

    act(() => fireEvent.press(radioButton));
    act(() => fireEvent.press(button));

    expect(getByTestId(ERROR_NAME_TEST_ID)).toBeDefined();
    expect(store.getActions()[0].type).toEqual('app/setGlobalError');
  });

  it('should show the correct error label and dispatch a global error if an incorrect name format has been entered', () => {
    const { getByTestId } = renderedComponent;

    act(() => fireEvent.press(radioButton));
    act(() => fireEvent.changeText(input, 'M123'));
    act(() => fireEvent.press(button));

    expect(getByTestId(ERROR_NAME_TEST_ID)).toBeDefined();
    expect(store.getActions()[0].type).toEqual('app/setGlobalError');
  });

  it('should dispatch the correct action if all form fields have been entered correctly', () => {
    act(() => fireEvent.changeText(input, 'Matt'));
    act(() => fireEvent.press(radioButton));
    act(() => fireEvent.press(button));

    expect(store.getActions()[0].type).toEqual('app/setUserName');
  });
});
