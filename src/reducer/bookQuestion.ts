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
  BookForViewer,
  BookQuestionList,
  DetailQuestion,
  AnswersFromAuthor,
  AnswersFromReader,
} from '../services/forViewer/models';

export interface BookQuestionState {
  bookQuestionList: BookQuestionList;
  isLoading: boolean;
  bookDetailQuestion: {
    detailQuestion: DetailQuestion;
    answersFromAuthor: AnswersFromAuthor;
    answersFromReader: AnswersFromReader;
  };
  selectedQuestionId: number;
  error?: AxiosError | null;
}

export const initialState: BookQuestionState = {
  bookQuestionList: {
    questions: [],
  },
  bookDetailQuestion: {
    detailQuestion: {
      userName: '',
      createdAt: '',
      pageNum: 0,
      title: '',
      content: '',
    },
    answersFromAuthor: {
      answers: [],
    },
    answersFromReader: {
      answers: [],
    },
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
  console.log(action.type);
  switch (action.type) {
    case ActionType.GET_BOOK_QUESTION_LIST_START:
      return {
        ...state,
        bookQuestionList: { questions: [] },
        isLoading: true,
      };
    case ActionType.GET_BOOK_QUESTION_LIST_SUCCEED:
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
      console.log('gggg');
      console.log(action.payload);

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
