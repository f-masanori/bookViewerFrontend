/* 用途
1.本のデータを取得する時
2.ビューワーに表示する時
 */
export interface BookForViewer {
  pageForViewer: {
    chapterId: number;
    pages: {
      pageId: number;
      sentences: {
        sentenceId: number;
        content: string;
        hasQuestion: boolean; // (あり:0, なし:1)
      }[];
    }[];
  }[];
}

/* 用途
1.質問投稿する時(api)
2.フォームのデータを
 */
export interface PostQuestion {
  userId: number;
  pageNum: number;
  rowNum?: number;
  sentenceId?: number;
  title: string;
  content: string;
}
/* 用途
1.質問詳細を表示する時
 */
export interface DetailQuestion {
  userName: string;
  createdAt: string;
  pageNum: number;
  rowNum?: number;
  title: string;
  content: string;
}

export interface BookQuestionList {
  questions: BookQuestionForList[];
}

export interface BookQuestionForList {
  questionId: number;
  userName: string;
  title: string;
  createdAt: string;
}

// 回答のモデルはまとめて、読者と著者はisAuthorやuserName等で判断するのもあり？
export interface AnswersFromAuthor {
  answers: {
    createdAt: string;
    content: string;
    likeNum: number;
  }[];
}

export interface AnswersFromReader {
  answers: {
    useName: string;
    createdAt: string;
    content: string;
    likeNum: number;
  }[];
}

export interface PostReplyParams {
  userId: number;
  questionId: number;
  content: string;
}

export interface BookPage {
  contents: {
    content: string;
  }[];
}
