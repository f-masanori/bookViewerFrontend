import axios from 'axios';

import {
  BookForViewer,
  BookQuestionList,
  DetailQuestion,
  AnswersFromAuthor,
  AnswersFromReader,
  BookPage,
} from './models';

interface ApiConfig {
  baseURL: string;
  timeout: number;
}

// envからの取得が出来ていない
const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: 'https://book-viewer-backend.herokuapp.com/api/',
  timeout: 7000,
};

export const getBookDataForViewer = () => {
  /* apiを叩く際の設定 */
  const config = {
    ...DEFAULT_API_CONFIG,
  };
  const instance = axios.create(config);

  const getBookData = async (bookID: number) => {
    // ここでapiを叩いてデータを取得する
    const { data } = await instance.get(`/book/mine/${bookID}`);
    const bookForViewer: BookForViewer = {
      pageForViewer: data.book,
    };

    return bookForViewer;
  };

  return getBookData;
};

export const getBookQuestionList = () => {
  /* apiを叩く際の設定 */
  const config = {
    ...DEFAULT_API_CONFIG,
  };
  const instance = axios.create(config);

  const getBookQuestionListData = async (chapterId: number) => {
    const { data } = await instance.get(`/chapter/${chapterId}`);
    const bookQuestionList: BookQuestionList = {
      questions: data.questions,
    };

    return bookQuestionList;
  };

  return getBookQuestionListData;
};

export const getBookDetailQuestion = () => {
  /* apiを叩く際の設定 */
  const config = {
    ...DEFAULT_API_CONFIG,
  };
  const instance = axios.create(config);

  const getBookDetailQuestionData = async (questionId: number) => {
    const { data } = await instance.get(`/question/${questionId}/content`);
    const bookQuestionList: DetailQuestion = data;

    return bookQuestionList;
  };

  return getBookDetailQuestionData;
};

export const getAnswersFromReader = () => {
  /* apiを叩く際の設定 */
  const config = {
    ...DEFAULT_API_CONFIG,
  };
  const instance = axios.create(config);

  const answerList = async (questionId: number) => {
    const { data } = await instance.get(
      `/question/${questionId}/author/answer`,
    );
    const answersFromReader: AnswersFromReader = data;

    return answersFromReader;
  };

  return answerList;
};

export const getAnswersFromAuthor = () => {
  /* apiを叩く際の設定 */
  const config = {
    ...DEFAULT_API_CONFIG,
  };
  const instance = axios.create(config);

  const answerList = async (questionId: number) => {
    const { data } = await instance.get(
      `/question/${questionId}/reader/answer`,
    );
    const answersFromAuthor: AnswersFromAuthor = data;

    return answersFromAuthor;
  };

  return answerList;
};

export const getPageFromQuestion = () => {
  /* apiを叩く際の設定 */
  const config = {
    ...DEFAULT_API_CONFIG,
  };
  const instance = axios.create(config);

  const page = async (questionId: number) => {
    const { data } = await instance.get(`/question/${questionId}/page`);
    const bookPage: BookPage = data;

    return bookPage;
  };

  return page;
};

export const getBookQuestionListFromTitle = () => {
  /* apiを叩く際の設定 */
  const config = {
    ...DEFAULT_API_CONFIG,
  };
  const instance = axios.create(config);

  const getBookQuestionListData = async (title: string) => {
    const { data } = await instance.get(`/question/search/${title}`);
    const bookQuestionList: BookQuestionList = data;

    return bookQuestionList;
  };

  return getBookQuestionListData;
};

export const getBookQuestionListFromSentence = () => {
  /* apiを叩く際の設定 */
  const config = {
    ...DEFAULT_API_CONFIG,
  };
  const instance = axios.create(config);

  const getBookQuestionListData = async (sentenceId: number) => {
    const { data } = await instance.get(
      `/question/search/sentence/${sentenceId}`,
    );
    const bookQuestionList: BookQuestionList = data;

    return bookQuestionList;
  };

  return getBookQuestionListData;
};
