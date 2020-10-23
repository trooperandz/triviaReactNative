import { combineReducers } from '@reduxjs/toolkit';
import appReducer from '../features/app/appSlice';
import questionReducer from '../features/questions/questionsSlice';

const rootReducer = combineReducers({
  app: appReducer,
  questions: questionReducer,
});

export default rootReducer;
