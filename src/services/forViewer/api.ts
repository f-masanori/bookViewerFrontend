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
    const bookForViewer: BookForViewer = {
      pageForViewer: [
        {
          chapterId: 1,
          pages: [
            {
              pageId: 1,
              sentences: [
                {
                  sentenceId: 1,
                  content: 'hogehoge',
                  questions: false, // (あり:0, なし:1)
                },
              ],
            },
          ],
        },
      ],
    };

    return bookForViewer;
  };

  return getBookData;
};
