import { Reducer } from 'redux';
import { AxiosError } from 'axios';

import {
  AnswersAction,
  GetAnswersFromAuthorParams,
  GetAnswersFromAuthorResult,
  GetAnswersFromReaderParams,
  GetAnswersFromReaderResult
} from '../actions/getAnswers';
import * as ActionType from '../actions/getAnswersConstants';
import {
  AnswersFromAuthor,
  AnswersFromReader,
} from '../services/forViewer/models';

export interface AnswersState {
  answersFromAuthor: AnswersFromAuthor;
  answersFromReader: AnswersFromReader;
  isLoading: boolean;
  error?: AxiosError | null;
}

export const initialState: AnswersState = {
    answersFromAuthor: {
      answers: [],
    },
    answersFromReader: {
      answers: [],
    },
  isLoading: false,
};

type AnswersFromAuthorPayload = {
  params: GetAnswersFromAuthorParams;
  result: GetAnswersFromAuthorResult;
};

type AnswersFromReaderPayload = {
  params: GetAnswersFromReaderParams;
  result: GetAnswersFromReaderResult;
};

type error = {
  error?: AxiosError | null;
};

export const answerReducer: Reducer<
  AnswersState,
  AnswersAction
> = (
  state: AnswersState = initialState,
  action: AnswersAction,
): AnswersState => {
  switch (action.type) {

      case ActionType.GET_ANSWERS_FROM_AUTHOR_START:
        return {
          ...state,
          answersFromAuthor: { answers: [] },
          isLoading: true,
        };

      case ActionType.GET_ANSWERS_FROM_AUTHOR_SUCCEED:
        return {
          ...state,
          answersFromAuthor: (action.payload as AnswersFromAuthorPayload).result.answers,
          isLoading: false,
        };

      case ActionType.GET_ANSWERS_FROM_AUTHOR_FAIL:
        return {
          ...state,
          isLoading: false,
          error: (action as error).error,
        };

    case ActionType.GET_ANSWERS_FROM_READER_START:
      return {
        ...state,
        answersFromReader: { answers: [] },
        isLoading: true,
      };

    case ActionType.GET_ANSWERS_FROM_READER_SUCCEED:
      return {
        ...state,
        answersFromReader: (action.payload as AnswersFromReaderPayload).result.answers,
        isLoading: false,
      };

    case ActionType.GET_ANSWERS_FROM_READER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: (action as error).error,
      };
      default: {
        return state;
      }
    }
  };
