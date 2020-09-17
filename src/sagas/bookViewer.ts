import {
  all,
  call,
  fork,
  put,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects';

import * as Action from '../actions/bookForViewerConstants';
import * as bookQuestionAction from '../actions/bookQuestionConstants';

import { getBookForViewer } from '../actions/bookForViewer';
import { getBookQuestionList } from '../actions/bookQuestion';
import {
  getBookDataForViewer,
  getBookQuestionList as apiToGetBookQuestionList,
} from '../services/forViewer/api';

function* runGetBookForViewer(
  action: ReturnType<typeof getBookForViewer.start>,
) {
  const { bookID } = action.payload;

  try {
    const api = getBookDataForViewer();
    const bookForViewer = yield call(api, bookID);
    yield put(getBookForViewer.succeed({ bookID }, { bookForViewer }));
  } catch (error) {
    yield put(getBookForViewer.fail({ bookID }, error));
  }
}

function* runGetBookQuestionList(
  action: ReturnType<typeof getBookQuestionList.start>,
) {
  const { chapterId } = action.payload;

  try {
    const api = apiToGetBookQuestionList();
    const bookQuestionList = yield call(api, chapterId);

    yield put(getBookQuestionList.succeed({ chapterId }, { bookQuestionList }));
  } catch (error) {
    yield put(getBookQuestionList.fail({ chapterId }, error));
  }
}
export default function* rootSaga() {
  /*
  Action.GET_BOOKFORVIEWER_STARTのアクションが実行されたら、
  runGetBookForviewerが実行される
  */
  yield takeEvery(Action.GET_BOOKFORVIEWER_START, runGetBookForViewer);
  yield takeEvery(
    bookQuestionAction.GET_BOOK_QUESTION_LIST_START,
    runGetBookQuestionList,
  );
}

// https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
