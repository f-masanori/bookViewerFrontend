import { AxiosError } from 'axios';
import * as ActionType from './getAnswersConstants';
import {
  AnswersFromAuthor,
  AnswersFromReader
} from '../services/forViewer/models';

export interface GetAnswersFromAuthorParams {
  questionId: number;
}

export interface GetAnswersFromAuthorResult {
  answers: AnswersFromAuthor;
}

export interface GetAnswersFromReaderParams {
  questionId: number;
}

export interface GetAnswersFromReaderResult {
  answers: AnswersFromReader;
}

export const getAnswersFromAuthor = {
  start: (params: GetAnswersFromAuthorParams) => ({
    type: ActionType.GET_ANSWERS_FROM_AUTHOR_START,
    payload: { params },
  }),

  succeed: (
    params: GetAnswersFromAuthorParams,
    result: GetAnswersFromAuthorResult,
  ) => ({
    type: ActionType.GET_ANSWERS_FROM_AUTHOR_SUCCEED,
    payload: { params, result },
  }),

  fail: (params: GetAnswersFromAuthorParams, error: AxiosError) => ({
    type: ActionType.GET_ANSWERS_FROM_AUTHOR_FAIL,
    payload: { params, error },
    error: true,
  }),
};

export const getAnswersFromReader = {
  start: (params: GetAnswersFromReaderParams) => ({
    type: ActionType.GET_ANSWERS_FROM_READER_START,
    payload: { params },
  }),

  succeed: (
    params: GetAnswersFromReaderParams,
    result: GetAnswersFromReaderResult,
  ) => ({
    type: ActionType.GET_ANSWERS_FROM_READER_SUCCEED,
    payload: { params, result },
  }),

  fail: (params: GetAnswersFromReaderParams, error: AxiosError) => ({
    type: ActionType.GET_ANSWERS_FROM_READER_FAIL,
    payload: { params, error },
    error: true,
  }),
};

export type AnswersAction =
  | ReturnType<typeof getAnswersFromAuthor.start>
  | ReturnType<typeof getAnswersFromAuthor.succeed>
  | ReturnType<typeof getAnswersFromAuthor.fail>
  | ReturnType<typeof getAnswersFromReader.start>
  | ReturnType<typeof getAnswersFromReader.succeed>
  | ReturnType<typeof getAnswersFromReader.fail>;
