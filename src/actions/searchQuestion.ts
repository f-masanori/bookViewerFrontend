import { AxiosError } from 'axios';
import * as ActionType from './bookQuestionConstants';
import {
  BookQuestionList,
  PostQuestion,
  DetailQuestion,
  AnswersFromAuthor,
} from '../services/forViewer/models';

/*
GetBookQuestionList...質問リストの取得時に使用
PostBookQuestion...質問投稿の時に使用
getBookDetailQuestion...質問の詳細を取得時に使用
*/
export interface GetBookQuestionListWithKeywordParams {
  keyword: string;
}

export interface GetBookQuestionListWithKeywordResult {
  questionList: BookQuestionList;
}

export const getBookQuestionListWithKeyword = {
  start: (params: GetBookQuestionListWithKeywordParams) => ({
    type: ActionType.GET_BOOK_QUESTION_LIST_START,
    payload: params,
  }),

  succeed: (
    params: GetBookQuestionListWithKeywordParams,
    result: GetBookQuestionListWithKeywordResult,
  ) => ({
    type: ActionType.GET_BOOK_QUESTION_LIST_SUCCEED,
    payload: { params, result },
  }),

  fail: (params: GetBookQuestionListWithKeywordParams, error: AxiosError) => ({
    type: ActionType.GET_BOOK_QUESTION_LIST_FAIL,
    payload: { params, error },
    error: true,
  }),
};

export type BookQuestionAction =
  | ReturnType<typeof getBookQuestionListWithKeyword.start>
  | ReturnType<typeof getBookQuestionListWithKeyword.succeed>
  | ReturnType<typeof getBookQuestionListWithKeyword.fail>;
