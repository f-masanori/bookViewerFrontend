import { Reducer } from 'redux';
import { AxiosError } from 'axios';

import { BookForViewerAction } from '../actions/bookForViewer';
import * as ActionType from '../actions/bookForViewerConstants';
import { BookForViewer } from '../services/forViewer/models';

export interface BookForViewerState {
  // bookidつける
  bookForViewer: BookForViewer;
  isLoading: boolean;
  error?: AxiosError | null;
}

export const initialState: BookForViewerState = {
  bookForViewer: {
    pageForViewer: [],
  },
  isLoading: false,
};

export const bookForViewerReducer: Reducer<
  BookForViewerState,
  BookForViewerAction
> = (
  state: BookForViewerState = initialState,
  action: BookForViewerAction,
): BookForViewerState => {
  console.log('reducer');

  switch (action.type) {
    case ActionType.GET_BOOKFORVIEWER_START:
      return {
        ...state,
        bookForViewer: { pageForViewer: [] },
        isLoading: true,
      };
    case ActionType.GET_BOOKFORVIEWER_SUCCEED:
      console.log('reducGET_BOOKFORVIEWER_SUCCEEDer');

      return {
        ...state,
        bookForViewer: action.payload.result.bookForViewer,
        isLoading: false,
      };
    case ActionType.GET_BOOKFORVIEWER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default: {
      console.error('miss match');

      return state;
    }
  }
};
