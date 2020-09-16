import { combineReducers } from 'redux';
import { bookForViewerReducer, BookForViewerState } from './bookForViewer';
import { bookQuestionReducer, BookQuestionState } from './bookQuestion';

export interface ConbineState {
  bookForViewer: BookForViewerState;
  bookQuestion: BookQuestionState;
}

const rootReducer = combineReducers({
  bookForViewer: bookForViewerReducer,
  bookQuestion: bookQuestionReducer,
});

export default rootReducer;
