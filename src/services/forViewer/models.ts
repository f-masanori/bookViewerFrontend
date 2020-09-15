export interface BookForViewer {
  page_for_viewer?: {
    chapter_id: number;
    pages: {
      page_id: number;
      sentences: {
        sentence_id: number;
        content: string;
        questions: boolean; // (あり:0, なし:1)
      }[];
    }[];
  }[];
}

export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
