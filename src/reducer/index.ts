import { combineReducers } from 'redux';
import { bookForViewerReducer, BookForViewerState } from './bookForViewer';
import { bookQuestionReducer, BookQuestionState } from './bookQuestion';
import { answerReducer, AnswersState } from './getAnswers';
import {detailQuestionsReducer, DetailQuestionsState } from './getDetailQuestions';

export interface ConbineState {
  bookForViewer: BookForViewerState;
  bookQuestion: BookQuestionState;
  answers: AnswersState;
  detailQuestions: DetailQuestionsState;
}

const rootReducer = combineReducers({
  bookForViewer: bookForViewerReducer,
  bookQuestion: bookQuestionReducer,
  answers: answerReducer,
  detailQuestions: detailQuestionsReducer,
});

export default rootReducer;
