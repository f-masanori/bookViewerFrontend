import { Reducer } from 'redux';
import { AxiosError } from 'axios';

import {
  AnswersFromAuthor,
  AnswersFromReader,
} from '../services/forViewer/models';

// export interface BookAnswerState {
//     answersFromAuthor: AnswersFromAuthor;
//   answersFromReader: AnswersFromReader;
//   isLoading: boolean;
//   error?: AxiosError | null;
// }

export const initialState: any = {
    answersFromAuthor: {
      answers: [],
    },
    answersFromReader: {
      answers: [],
    },
  isLoading: false,
};
// type payload = {
//   params: GetBookQuestionListParams;
//   result: GetBookQuestionListResult;
// };
// type error = {
//   error?: AxiosError | null;
// };
export const bookAnswerReducer: Reducer<
  any,
  any
> = (
  state: any = initialState,
  action: any,
  ): any => {
    switch (action.type) {
      case 'ANSWER':
        /* paramsを用いて selectedQuestionIdを変更する*/

        // type answersFromAuthorPayload = {
        //   params: GetBookDetailQuestionParams;
        //   result: GetBookDetailQuestionResult;
        // };

        return {
          ...state,
          answersFromAuthor: action.payload.answersFromAuthor,
          answersFromReader: action.payload.answersFromReader,
          isLoading: true,
        };

        /* paramsを用いて selectedQuestionIdを変更する*/

        // type answersFromAuthorPayload = {
        //   params: GetBookDetailQuestionParams;
        //   result: GetBookDetailQuestionResult;
        // };
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
