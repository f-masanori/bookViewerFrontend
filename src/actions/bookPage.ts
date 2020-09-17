import { AxiosError } from 'axios';

import { BookPage } from '../services/forViewer/models';
import * as ActionType from './bookPageContents';

export interface GetBookPageParams {
  chapterId: number;
}
export interface GetBookPageResult {
  contents: BookPage;
}

export const getBookPage = {
  start: (params: GetBookPageParams) => ({
    type: ActionType.GET_BOOK_PAGE_START,
    payload: params,
  }),

  succeed: (params: GetBookPageParams, result: GetBookPageResult) => ({
    type: ActionType.GET_BOOK_PAGE_SUCCEED,
    payload: { params, result },
  }),

  fail: (params: GetBookPageParams, error: AxiosError) => ({
    type: ActionType.GET_BOOK_PAGE_FAIL,
    payload: { params, error },
    error: true,
  }),
};

export type BookPageAction =
  | ReturnType<typeof getBookPage.start>
  | ReturnType<typeof getBookPage.succeed>
  | ReturnType<typeof getBookPage.fail>;
