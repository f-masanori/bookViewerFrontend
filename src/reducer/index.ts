import { combineReducers } from 'redux';
import { bookForViewerReducer, BookForViewerState } from './bookForViewer';

export interface ConbineState {
  bookForViewer: BookForViewerState;
  // bookForViewer2: BookForViewerState2; 二個目以降はここに追加していく
}

const rootReducer = combineReducers({
  bookForViewer: bookForViewerReducer,
  // bookForViewer2: bookForViewerReducer2,
});

export default rootReducer;
