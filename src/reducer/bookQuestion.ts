import { Reducer } from 'redux';
import { AxiosError } from 'axios';

import {
  BookQuestionAction,
  GetBookQuestionListParams,
  GetBookQuestionListResult,
  GetBookDetailQuestionParams,
  GetBookDetailQuestionResult,
} from '../actions/bookQuestion';
import * as ActionType from '../actions/bookQuestionConstants';
import {
  BookQuestionList,
} from '../services/forViewer/models';

export interface BookQuestionState {
  bookQuestionList: BookQuestionList;
  isLoading: boolean;
  selectedQuestionId: number;
  error?: AxiosError | null;
}

export const initialState: BookQuestionState = {
  bookQuestionList: {
    questions: [],
  },
  selectedQuestionId: 0,
  isLoading: false,
};
type payload = {
  params: GetBookQuestionListParams;
  result: GetBookQuestionListResult;
};
type error = {
  error?: AxiosError | null;
};
export const bookQuestionReducer: Reducer<
  BookQuestionState,
  BookQuestionAction
> = (
  state: BookQuestionState = initialState,
  action: BookQuestionAction,
): BookQuestionState => {
  switch (action.type) {
    case ActionType.POST_BOOK_QUESTION:
      return {
        ...state,
        // bookQuestionList: {
        //   questions: [
        //     ...state.bookQuestionList.questions,
        //     ((action.payload as unknown) as PostBookQuestionParams)
        //       .postQuestion,
        //   ],
        // },
        isLoading: false,
      };
    case ActionType.GET_BOOK_QUESTION_LIST_START:
      return {
        ...state,
        bookQuestionList: { questions: [] },
        isLoading: true,
      };
    case ActionType.GET_BOOK_QUESTION_LIST_SUCCEED:
      console.log(action.payload);

      return {
        ...state,
        bookQuestionList: (action.payload as payload).result.bookQuestionList,
        isLoading: false,
      };
    case ActionType.GET_BOOK_QUESTION_LIST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: (action as error).error,
      };
    case ActionType.GET_BOOK_DETAIL_QUESTION_START:
      /* paramsを用いて selectedQuestionIdを変更する*/

      type bookDetailQuestionPayload = {
        params: GetBookDetailQuestionParams;
        result: GetBookDetailQuestionResult;
      };

      return {
        ...state,
        selectedQuestionId: ((action.payload as unknown) as bookDetailQuestionPayload)
          .params.questionId,
        isLoading: true,
      };
    // case ActionType.GET_BOOK_DETAIL_QUESTION_SUCCEED:
    //   return {
    //     ...state,
    //     bookQuestionList: (action.payload as payload).result.bookQuestionList,
    //     isLoading: false,
    //   };
    // case ActionType.GET_BOOK_DETAIL_QUESTION_FAIL:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: (action as error).error,
    //   };
    default: {
      return state;
    }
  }
};
