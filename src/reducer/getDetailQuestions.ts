import { Reducer } from 'redux';
import { AxiosError } from 'axios';

import {
  DetailQuestionsAction,
  GetDetailQuestionsParams,
  GetDetailQuestionsResult,
} from '../actions/getDetailQuestions';
import * as ActionType from '../actions/getDetailQuestionsConstants';
import {
  DetailQuestion,
} from '../services/forViewer/models';

export interface DetailQuestionsState {
  detailQuestions: DetailQuestion;
  isLoading: boolean;
  selectedQuestionId: number;
  error?: AxiosError | null;
}

export const initialState: DetailQuestionsState = {
  detailQuestions: {
    userName: '',
    createdAt: '',
    pageNum: 1,
    rowNum: 1,
    title: '',
    content: '',
  },
  selectedQuestionId: 0,
  isLoading: false,
};
type payload = {
  params: GetDetailQuestionsParams;
  result: GetDetailQuestionsResult;
};
type error = {
  error?: AxiosError | null;
};
export const detailQuestionsReducer: Reducer<
  DetailQuestionsState,
  DetailQuestionsAction
> = (
  state: DetailQuestionsState = initialState,
  action: DetailQuestionsAction,
): DetailQuestionsState => {
    switch (action.type) {
      case ActionType.GET_DETAIL_QUESTIONS_START:
        return {
          ...state,
          selectedQuestionId: action.payload.params.questionId,
          isLoading: true,
        };
      case ActionType.GET_DETAIL_QUESTIONS_SUCCEED:
        console.log(action.payload);

        return {
          ...state,
          detailQuestions: (action.payload as payload).result.detailQuestions,
          isLoading: false,
        };
      case ActionType.GET_DETAIL_QUESTIONS_FAIL:
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
