import axios from 'axios';

import { BookForViewer, BookQuestionList } from './models';

interface ApiConfig {
  baseURL: string;
  timeout: number;
}

const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: '',
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
                  content:
                    'React (リアクト) は、Facebookとコミュニティによって開発されているユーザインタフェース構築のためのJavaScriptライブラリである。',
                  questions: false, // (あり:0, なし:1)
                },
                {
                  sentenceId: 2,
                  content: 'React.jsまたはReactJSの名称でも知られている。',
                  questions: false, // (あり:0, なし:1)
                },
                {
                  sentenceId: 3,
                  content:
                    'ですがサーバーサイドではセッションを使うことによって可能になります。',
                  questions: false, // (あり:0, なし:1)
                },
                {
                  sentenceId: 4,
                  content:
                    'クライアントのJavaScriptを使ってる場合、ページを超えての値の保持はできません。',
                  questions: false, // (あり:0, なし:1)
                },
                {
                  sentenceId: 5,
                  content:
                    'セッションはサーバーサイドで値を保持できる機能です。',
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
export const getBookQuestionList = () => {
  /* apiを叩く際の設定 */
  const config = {
    ...DEFAULT_API_CONFIG,
  };
  const instance = axios.create(config);

  const getBookQuestionListData = async (chapterId: number) => {
    const bookQuestionList: BookQuestionList = {
      questions: [
        {
          qustionId: 2,
          userName: 'satousan',
          createdAt: '1777/12/11',
          title: 'これは何？',
        },
      ],
    };

    return bookQuestionList;
  };

  return getBookQuestionListData;
};
