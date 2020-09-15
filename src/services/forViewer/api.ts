import axios from 'axios';

import { BookForViewer } from './models';

interface ApiConfig {
  baseURL: string;
  timeout: number;
}

const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: '',
  timeout: 7000,
};

export const getBookDataForViewer = (optionConfig?: ApiConfig) => {
  /* apiを叩く際の設定 */
  const config = {
    ...DEFAULT_API_CONFIG,
    ...optionConfig,
  };
  const instance = axios.create(config);

  const getBookData = async (bookID: number) => {
    // ここでapiを叩いてデータを取得する
    const bookForViewer: BookForViewer = {};

    return bookForViewer;
  };

  return getBookData;
};
