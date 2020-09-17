import { AxiosError } from 'axios';
import * as ActionType from './bookQuestionConstants';
import {
  BookQuestionList,
  PostQuestion,
  DetailQuestion,
} from '../services/forViewer/models';

/*
GetBookQuestionList...質問リストの取得時に使用
PostBookQuestion...質問投稿の時に使用
getBookDetailQuestion...質問の詳細を取得時に使用
*/
export interface GetBookQuestionListParams {
  chapterId: number;
}
export interface GetBookQuestionListResult {
  bookQuestionList: BookQuestionList;
}

/* ここのinterfaceの定義をして欲しい(質問投稿に必要な値) */
export interface PostBookQuestionParams {
  postQustion: PostQuestion;
}
// export interface PostBookQuestionResult {
//   bookQuestionList: BookQuestionList;
// }

export interface GetBookDetailQuestionParams {
  questionId: number;
}
export interface GetBookDetailQuestionResult {
  detailQuestion: DetailQuestion;
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

export const postBookQuestion = {
  start: (params: PostBookQuestionParams) => ({
    type: ActionType.POST_BOOK_QUESTION_START,
    payload: { params },
  }),
  /* 今回は時間ないからpostの際の成功and失敗エラー処理をかかない */
  // succeed: (
  //   params: GetBookQuestionListParams,
  //   result: GetBookQuestionListResult,
  // ) => ({
  //   type: ActionType.GET_BOOK_QUESTION_LIST_SUCCEED,
  //   payload: { params, result },
  // }),

  // fail: (params: GetBookQuestionListParams, error: AxiosError) => ({
  //   type: ActionType.GET_BOOK_QUESTION_LIST_FAIL,
  //   payload: { params, error },
  //   error: true,
  // }),
};

export const getBookDetailQuestion = {
  start: (params: GetBookDetailQuestionParams) => ({
    type: ActionType.GET_BOOK_DETAIL_QUESTION_START,
    payload: { params },
  }),

  succeed: (
    params: GetBookDetailQuestionParams,
    result: GetBookDetailQuestionResult,
  ) => ({
    type: ActionType.GET_BOOK_QUESTION_LIST_SUCCEED,
    payload: { params, result },
  }),

  fail: (params: GetBookDetailQuestionParams, error: AxiosError) => ({
    type: ActionType.GET_BOOK_QUESTION_LIST_FAIL,
    payload: { params, error },
    error: true,
  }),
};

export type BookQuestionAction =
  | ReturnType<typeof getBookQuestionList.start>
  | ReturnType<typeof getBookQuestionList.succeed>
  | ReturnType<typeof getBookQuestionList.fail>
  | ReturnType<typeof postBookQuestion.start>
  | ReturnType<typeof getBookDetailQuestion.start>;
