import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import * as ActionType from '../actions/getDetailQuestionsConstants';
import { getDetailQuestions } from '../actions/getDetailQuestions';
import {
  getBookDetailQuestion,
} from '../services/forViewer/api';

function* runGetDetailQuestions(
  action: ReturnType<typeof getDetailQuestions.start>,
) {
  const { questionId } = action.payload.params;

  try {
    const api = getBookDetailQuestion();
    const detailQuestions = yield call(api, questionId);
    yield put(getDetailQuestions.succeed({ questionId }, { detailQuestions }));
  } catch (error) {
    yield put(getDetailQuestions.fail({ questionId }, error));
  }
}

export const detailQuestionsSagas = [
  takeLatest(ActionType.GET_DETAIL_QUESTIONS_START, runGetDetailQuestions),
]
