import React, { FC } from 'react';
import { withRouter } from 'react-router';
import { BookForViewer } from '../../services/forViewer/models';

export interface BookViewerProps {
  bookForViewer: BookForViewer;
  isLoading?: boolean;
}

/* 本当はpropsの型を指定したいけど,routerが入っているのでanyにしている
他にいいやり方がありそう？ */
const BookViewer: FC<any> = (): JSX.Element => {
  return <div>viewer</div>;
};

export default withRouter(BookViewer);
