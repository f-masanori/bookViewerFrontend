import {
  all,
  call,
  fork,
  put,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects';

import * as Action from '../actions/bookForViewerConstants';
import { getBookForViewer } from '../actions/bookForViewer';
import { getBookDataForViewer } from '../services/forViewer/api';

function* runGetBookForViewer(
  action: ReturnType<typeof getBookForViewer.start>,
) {
  const { bookID } = action.payload;

  try {
    const api = getBookDataForViewer();
    const bookForViewer = yield call(api, bookID);
    console.log('sagas');
    yield put(getBookForViewer.succeed({ bookID }, { bookForViewer }));
  } catch (error) {
    yield put(getBookForViewer.fail({ bookID }, error));
  }
}

export default function* rootSaga() {
  /*
  Action.GET_BOOKFORVIEWER_STARTのアクションが実行されたら、
  runGetBookForviewerが実行される
  */
  yield takeEvery(Action.GET_BOOKFORVIEWER_START, runGetBookForViewer);
}

// https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
