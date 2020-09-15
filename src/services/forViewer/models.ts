export interface BookForViewer {
  pageForViewer: {
    chapterId: number;
    pages: {
      pageId: number;
      sentences: {
        sentenceId: number;
        content: string;
        questions: boolean; // (あり:0, なし:1)
      }[];
    }[];
  }[];
}

// 共通する部分は合体できる？
// 質問する場合はuserIdを送信するようになっている
export interface Question {
  userName: string;
  createdAt: string;
  pageNum: number;
  rowNum: number;
  title: string;
  content: string;
}

export interface QuestionList {
  questions: {
    qustionId: number;
    userName: string;
    title: string;
    createdAt: string;
  }[];
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
    userNmae: string;
    createdAt: string;
    content: string;
    likeNum: number;
  }[];
}
