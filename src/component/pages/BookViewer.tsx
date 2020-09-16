import React, { FC, useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Button,
} from 'semantic-ui-react';
import { BookForViewer } from '../../services/forViewer/models';
import {
  bookForViewerReducer,
  BookForViewerState,
} from '../../reducer/bookForViewer';
import { ConbineState } from '../../reducer/index';
import { getBookForViewer } from '../../actions/bookForViewer';

import ViewerHeader from '../organisms/header';
import Viewer from '../organisms/viewer';
import { QuestionSidebar } from '../organisms/sidebar';

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
    (state: ConbineState) => state.bookForViewer,
  );
  console.log(bookForViewerSelector);
  const [visible, setVisible] = useState(false);

  return (
    <Grid columns={1}>
      <Grid.Column>
        <div>
          <Button primary>Primary</Button>
          <Button onClick={() => setVisible(true)}>Secondary</Button>
        </div>
        {/* <Checkbox
        checked={visible}
        label={{ children: <code>visible</code> }}
        onChange={(e, data) => setVisible(data.checked)}
      /> */}
      </Grid.Column>

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
          >
            <Menu.Item as="a">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="gamepad" />
              Games
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="camera" />
              Channels
            </Menu.Item>
            <div>hoge</div>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <ViewerHeader setVisible={setVisible} />;
              <Viewer book={bookForViewerSelector.bookForViewer} />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
    // <>
    //   <ViewerHeader />
    //   <QuestionSidebar />
    // </>
  );
};

export default withRouter(BookViewer);

/*
コンテナコンポーネントではなくて
useDispatch,useSelectorを使用
*/
