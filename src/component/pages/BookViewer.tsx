import React, { FC, useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Menu, Segment, Sidebar } from 'semantic-ui-react';
import { BookForViewer } from '../../services/forViewer/models';
import {
  bookForViewerReducer,
  BookForViewerState,
} from '../../reducer/bookForViewer';
import { ConbineState } from '../../reducer/index';
import { getBookForViewer } from '../../actions/bookForViewer';
import { getBookQuestionList } from '../../actions/bookQuestion';
import { Viewer } from '../organisms/viewer';
import ViewerHeader from '../organisms/header';
// import Viewer from '../organisms/viewer';
import { QuestionList } from '../organisms/questionList';
import { DetailQuestion } from '../organisms/detailQuestion';

export interface BookViewerProps {
  bookForViewer: BookForViewer;
  isLoading?: boolean;
}

/* 本当はpropsの型を指定したいけど,routerが入っているのでanyにしている
他にいいやり方がありそう？ */

const BookViewer: FC<any | BookViewerProps> = (): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('useEffect');
    dispatch(getBookForViewer.start({ bookID: 0 }));
    dispatch(getBookQuestionList.start({ chapterId: 1 }));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  /*                  ↑のコメントアウトは認識されてる         */
  const reduxState = useSelector((state: ConbineState) => state);
  const bookForViewerState = reduxState.bookForViewer;
  const bookQuestionState = reduxState.bookQuestion;
  console.log(bookQuestionState.selectedQuestionId);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <ViewerHeader setVisible={(on: boolean) => setVisible(on)} />
      <Grid columns={1}>
        <Grid.Column>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation="overlay"
              icon="labeled"
              inverted
              onHide={() => setVisible(false)}
              vertical
              visible={visible}
              width="very wide"
              direction="right"
            >
              {bookQuestionState.selectedQuestionId === 0 ? (
                <QuestionList
                  questionList={bookQuestionState.bookQuestionList.questions}
                />
              ) : (
                  <DetailQuestion bookuQuesitionState={bookQuestionState} />
              )}
            </Sidebar>

            <Sidebar.Pusher>
              <Segment basic style={{ height: 450 }}>
                <Viewer book={bookForViewerState.bookForViewer} />
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default withRouter(BookViewer);

/*
コンテナコンポーネントではなくて
useDispatch,useSelectorを使用
*/
