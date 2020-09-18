import { AxiosError } from 'axios';
import * as ActionType from './getDetailQuestionsConstants';
import {
  DetailQuestion,
} from '../services/forViewer/models';

export interface GetDetailQuestionsParams {
  questionId: number;
}

export interface GetDetailQuestionsResult {
  detailQuestions: DetailQuestion;
}

export const getDetailQuestions = {
  start: (params: GetDetailQuestionsParams) => ({
    type: ActionType.GET_DETAIL_QUESTIONS_START,
    payload: { params },
  }),

  succeed: (
    params: GetDetailQuestionsParams,
    result: GetDetailQuestionsResult,
  ) => ({
      type: ActionType.GET_DETAIL_QUESTIONS_SUCCEED,
    payload: { params, result },
  }),

  fail: (params: GetDetailQuestionsParams, error: AxiosError) => ({
    type: ActionType.GET_DETAIL_QUESTIONS_FAIL,
    payload: { params, error },
    error: true,
  }),
};

export type DetailQuestionsAction =
  | ReturnType<typeof getDetailQuestions.start>
  | ReturnType<typeof getDetailQuestions.succeed>
  | ReturnType<typeof getDetailQuestions.fail>;
