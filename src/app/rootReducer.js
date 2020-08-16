import { combineReducers } from '@reduxjs/toolkit';
import appReducer from '../features/app/appSlice';
import homeReducer from '../features/home/homeSlice';
import questionReducer from '../features/questions/questionsSlice';

const rootReducer = combineReducers({
  app: appReducer,
  home: homeReducer,
  questions: questionReducer,
});

export default rootReducer;
