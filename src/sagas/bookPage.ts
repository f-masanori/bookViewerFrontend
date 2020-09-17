import { getBookPage } from '../actions/bookPage';
import * as Action from '../actions/bookPageContents';
import * as bookPageAction from '../actions/bookQuestionConstants';

import { getPageFromQuestion } from '../services/forViewer/api';

function* runGetPageFromQuestion(action: ReturnType<typeof getBookPage.start>) {
  const { chapterId } = action.payload;

  try {
    const api = getPageFromQuestion();
    const bookPage = yield call(api, chapterID);
    yield put(getBookPage.succeed({ chapterID }, { bookPage }));
  } catch (error) {
    yield put(getBookPage.fail({ chapterID }, error));
  }
}
