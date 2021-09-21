import { combineReducers } from 'redux';
import QuizReducer from './QuizReducer';

export default combineReducers({
      quiz: QuizReducer,
});
