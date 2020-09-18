import { Reducer } from 'redux';
import { AxiosError } from 'axios';

import {
  BookQuestionAction,
  GetBookQuestionListParams,
  GetBookQuestionListResult,
  GetBookDetailQuestionParams,
  GetBookDetailQuestionResult,
  PostBookQuestionParams,
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

    default: {
      return state;
    }
  }
};
