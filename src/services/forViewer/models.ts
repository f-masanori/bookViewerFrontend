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
