import { AxiosError } from 'axios';

import { BookForViewer } from '../services/forViewer/models';
import * as ActionType from './bookForViewerConstants';

interface GetBookForViewerParams {
  bookID: number;
}
interface GetBookForViewerResult {
  bookForViewer: BookForViewer;
}

export const getBookForViewer = {
  start: (params: GetBookForViewerParams) => ({
    type: ActionType.GET_BOOKFORVIEWER_START as typeof ActionType.GET_BOOKFORVIEWER_START,
    payload: params,
  }),

  succeed: (
    params: GetBookForViewerParams,
    result: GetBookForViewerResult,
  ) => ({
    type: ActionType.GET_BOOKFORVIEWER_SUCCEED as typeof ActionType.GET_BOOKFORVIEWER_SUCCEED,
    payload: { params, result },
  }),

  fail: (params: GetBookForViewerParams, error: AxiosError) => ({
    type: ActionType.GET_BOOKFORVIEWER_FAIL as typeof ActionType.GET_BOOKFORVIEWER_FAIL,
    payload: { params, error },
    error: true,
  }),
};

export type BookForViewerAction =
  | ReturnType<typeof getBookForViewer.start>
  | ReturnType<typeof getBookForViewer.succeed>
  | ReturnType<typeof getBookForViewer.fail>;
