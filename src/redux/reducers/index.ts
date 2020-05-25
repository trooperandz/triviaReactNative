import { combineReducers } from 'redux';

import { testReducer } from './test';

export const rootReducer = combineReducers({
  test: testReducer,
});
