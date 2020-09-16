import { Reducer } from 'redux';
import { AxiosError } from 'axios';

import {
  BookQuestionAction,
  GetBookQuestionListParams,
  GetBookQuestionListResult,
} from '../actions/bookQuestion';
import * as ActionType from '../actions/bookQuestionConstants';
import { BookForViewer, BookQuestionList } from '../services/forViewer/models';

export interface BookQuestionState {
  bookQuestionList: BookQuestionList;
  isLoading: boolean;
  error?: AxiosError | null;
}

export const initialState: BookQuestionState = {
  bookQuestionList: {
    questions: [],
  },
  isLoading: false,
};

export const bookQuestionReducer: Reducer<
  BookQuestionState,
  BookQuestionAction
> = (
  state: BookQuestionState = initialState,
  action: BookQuestionAction,
): BookQuestionState => {
  switch (action.type) {
    case ActionType.GET_BOOK_QUESTION_LIST_START:
      return {
        ...state,
        bookQuestionList: { questions: [] },
        isLoading: true,
      };
    case ActionType.GET_BOOK_QUESTION_LIST_SUCCEED:
      type payload = {
        params: GetBookQuestionListParams;
        result: GetBookQuestionListResult;
      };

      return {
        ...state,
        bookQuestionList: (action.payload as payload).result.bookQuestionList,
        isLoading: false,
      };
    case ActionType.GET_BOOK_QUESTION_LIST_FAIL:
      type error = {
        error?: AxiosError | null;
      };

      return {
        ...state,
        isLoading: false,
        error: (action as error).error,
      };
    default: {
      console.error('miss match');
      console.log(action);

      return state;
    }
  }
};
