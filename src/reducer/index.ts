import { combineReducers } from 'redux';
import { bookForViewerReducer, BookForViewerState } from './bookForViewer';
import { bookQuestionReducer, BookQuestionState } from './bookQuestion';
import { answerReducer, AnswersState } from './getAnswers';

export interface ConbineState {
  bookForViewer: BookForViewerState;
  bookQuestion: BookQuestionState;
  answers: AnswersState
}

const rootReducer = combineReducers({
  bookForViewer: bookForViewerReducer,
  bookQuestion: bookQuestionReducer,
  answers: answerReducer,
});

export default rootReducer;
