import { AxiosError } from 'axios';
import * as ActionType from './bookQuestionConstants';
import { BookQuestionList } from '../services/forViewer/models';

export interface GetBookQuestionListParams {
  chapterId: number;
}
export interface GetBookQuestionListResult {
  bookQuestionList: BookQuestionList;
}

export const getBookQuestionList = {
  start: (params: GetBookQuestionListParams) => ({
    type: ActionType.GET_BOOK_QUESTION_LIST_START,
    payload: params,
  }),

  succeed: (
    params: GetBookQuestionListParams,
    result: GetBookQuestionListResult,
  ) => ({
    type: ActionType.GET_BOOK_QUESTION_LIST_SUCCEED,
    payload: { params, result },
  }),

  fail: (params: GetBookQuestionListParams, error: AxiosError) => ({
    type: ActionType.GET_BOOK_QUESTION_LIST_FAIL,
    payload: { params, error },
    error: true,
  }),
};

export type BookQuestionAction =
  | ReturnType<typeof getBookQuestionList.start>
  | ReturnType<typeof getBookQuestionList.succeed>
  | ReturnType<typeof getBookQuestionList.fail>;
