import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import * as ActionType from '../actions/getAnswersConstants';
import { getAnswersFromAuthor, getAnswersFromReader } from '../actions/getAnswers';
import {
  getAnswersFromAuthor as apiToGetAnswersFromAuthor,
  getAnswersFromReader as apiToGetAnswersFromReader,
} from '../services/forViewer/api';

function* runGetAnswersFromAuthor(
  action: ReturnType<typeof getAnswersFromAuthor.start>,
) {
  const { questionId } = action.payload.params;

  try {
    const api = apiToGetAnswersFromAuthor();
    const answers = yield call(api, questionId);
    yield put(getAnswersFromAuthor.succeed({ questionId }, { answers }));
  } catch (error) {
    yield put(getAnswersFromAuthor.fail({ questionId }, error));
  }
}

function* runGetAnswersFromReader(
  action: ReturnType<typeof getAnswersFromReader.start>,
) {
  const { questionId } = action.payload.params;

  try {
    const api = apiToGetAnswersFromReader();
    const answers = yield call(api, questionId);
    yield put(getAnswersFromReader.succeed({ questionId }, { answers }));
  } catch (error) {
    yield put(getAnswersFromReader.fail({ questionId }, error));
  }
}

export const answersSagas = [
  takeLatest(ActionType.GET_ANSWERS_FROM_AUTHOR_START, runGetAnswersFromAuthor),
  takeLatest(ActionType.GET_ANSWERS_FROM_AUTHOR_START, runGetAnswersFromReader),
]
