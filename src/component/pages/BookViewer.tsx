import React, { FC, useEffect } from 'react';
import { withRouter } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { BookForViewer } from '../../services/forViewer/models';
import {
  bookForViewerReducer,
  BookForViewerState,
} from '../../reducer/bookForViewer';
import { getBookForViewer } from '../../actions/bookForViewer';

export interface BookViewerProps {
  bookForViewer: BookForViewer;
  isLoading?: boolean;
}

/* 本当はpropsの型を指定したいけど,routerが入っているのでanyにしている
他にいいやり方がありそう？ */
const BookViewer: FC<any | BookViewerProps> = (): JSX.Element => {
  // console.log(bookForViewer);
  useEffect(() => {
    console.log('useEffect');
    getBookForViewer.start({ bookID: 0 });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const bookForViewerSelector = useSelector(
    (state: BookForViewerState) => state.bookForViewer,
  );
  console.log(bookForViewerSelector);

  return <div>viewer</div>;
};

export default withRouter(BookViewer);
