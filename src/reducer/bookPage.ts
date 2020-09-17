import { Reducer } from 'redux';
import { AxiosError } from 'axios';

import {
  BookPageAction,
  GetBookPageParams,
  GetBookPageResult,
} from '../actions/bookPage';
import * as ActionType from '../actions/bookPageContents';
import { BookPage } from '../services/forViewer/models';

export interface BookPageState {
  bookPage: BookPage;
  isLoading: boolean;
  error?: AxiosError | null;
}

export const initialState: BookPageState = {
  bookPage: {
    contents: [],
  },
  isLoading: false,
};

type payload = {
  params: GetBookPageParams;
  result: GetBookPageResult;
};
type error = {
  error?: AxiosError | null;
};

export const bookPageReducer: Reducer<BookPageState, BookPageAction> = (
  state: BookPageState = initialState,
  action: BookPageAction,
): BookPageState => {
  switch (action.type) {
    case ActionType.GET_BOOK_PAGE_START:
      return {
        ...state,
        bookPage: { contents: [] },
        isLoading: true,
      };
    case ActionType.GET_BOOK_PAGE_SUCCEED:
      return {
        ...state,
        bookPage: (action.payload as payload).result.contents,
        isLoading: false,
      };
    case ActionType.GET_BOOK_PAGE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: (action as error).error,
      };
    default: {
      console.log(action);
      console.error('miss match');

      return state;
    }
  }
};
