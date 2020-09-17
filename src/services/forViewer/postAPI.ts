import axios from 'axios';

import { PostReplyParams, PostQuestion } from './models';

interface ApiConfig {
  baseURL: string;
  timeout: number;
}

// envからの取得が出来ていない
const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: 'https://book-viewer-backend.herokuapp.com/api/',
  timeout: 7000,
};

export const PostReply = async (params: PostReplyParams) => {
  /* apiを叩く際の設定 */
  const config = {
    ...DEFAULT_API_CONFIG,
  };
  const instance = axios.create(config);

  const { data } = await instance.post('/question/reply', params);

  return data.hasSuccess;
};

export const PostQuestionData = async (params: PostQuestion) => {
  /* apiを叩く際の設定 */
  const config = {
    ...DEFAULT_API_CONFIG,
  };
  const instance = axios.create(config);
  const { data } = await instance.post('/question/create', params);

  return data.hasSuccess;
};
