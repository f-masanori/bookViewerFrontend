import axios from 'axios';

import {
  BookForViewer,
  BookQuestionList,
  DetailQuestion,
  AnswersFromAuthor,
  AnswersFromReader,
  PostReplyParams,
  BookPage,
} from './models';
import { PostBookQuestionParams } from '../../actions/bookQuestion';

interface ApiConfig {
  baseURL: string;
  timeout: number;
}

// envからの取得が出来ていない
const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: process.env?.REACT_APP_DEV_API_URL || 'http://localhost:8080/api',
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
    const bookQuestionList: BookQuestionList = await instance.get(
      `/chapter/${chapterId}`,
    );

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
    const bookQuestionList: DetailQuestion = await instance.get(
      `/question/${questionId}/content`,
    );

    return bookQuestionList;
  };

  return getBookDetailQuestionData;
};

export const postBookQuestion = () => {
  /* apiを叩く際の設定 */
  const config = {
    ...DEFAULT_API_CONFIG,
  };
  const instance = axios.create(config);

  const postBookQuestionData = async (params: PostBookQuestionParams) => {
    // ここで実際にAPIを叩く処理を実装
    // TODO 要確認
    // 1 returnはnullでいいのか
    // 2 実際に成功しているかの確認も必要
    const { data } = await instance.post('/question/create', params);

    return data.hasSuccess;
  };

  return postBookQuestionData;
};

export const getAnswersFromReader = () => {
  /* apiを叩く際の設定 */
  const config = {
    ...DEFAULT_API_CONFIG,
  };
  const instance = axios.create(config);

  const answerList = async (questionId: number) => {
    const answersFromReader: AnswersFromReader = await instance.get(
      `/question/${questionId}/author/answer`,
    );

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
    const answersFromAuthor: AnswersFromAuthor = await instance.get(
      `/question/${questionId}/reader/answer`,
    );

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
    const bookPage: BookPage = await instance.get(
      `/question/${questionId}/page`,
    );

    return bookPage;
  };

  return page;
};

export const PostReply = () => {
  /* apiを叩く際の設定 */
  const config = {
    ...DEFAULT_API_CONFIG,
  };
  const instance = axios.create(config);

  const postBookQuestionData = async (params: PostReplyParams) => {
    const { data } = await instance.post('/question/reply', params);

    return data.hasSuccess;
  };

  return postBookQuestionData;
};

export const getBookQuestionListFromTitle = () => {
  /* apiを叩く際の設定 */
  const config = {
    ...DEFAULT_API_CONFIG,
  };
  const instance = axios.create(config);

  const getBookQuestionListData = async (title: string) => {
    const bookQuestionList: BookQuestionList = await instance.get(
      `/question/search/${title}`,
    );

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
    const bookQuestionList: BookQuestionList = await instance.get(
      `/question/search/sentence/${sentenceId}`,
    );

    return bookQuestionList;
  };

  return getBookQuestionListData;
};
