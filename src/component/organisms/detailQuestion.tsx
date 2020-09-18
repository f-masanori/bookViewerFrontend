import React, { useEffect, useState } from 'react';

import {
  Label,
  Feed,
  Card,
  Divider,
  Header,
  Item,
  Image,
  Menu,
  Button,
  Tab,
} from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';

import { AnswerForm } from '../molecules/answerForm';
import { CorrespondingPages } from './correspondingPages';
import { getBookDetailQuestion } from '../../actions/bookQuestion';
import { getPageFromQuestion } from '../../services/forViewer/api';
import { ConbineState } from '../../reducer/index';

export const DetailQuestion: React.FC<any> = (
  bookQuestionState,
): JSX.Element => {
  const [visible, setVisible] = useState(false);
  const [pageContents, setContents] = useState<any>([]);

  const dispatch = useDispatch();

  const reduxState = useSelector((state: ConbineState) => state);
  const questionId = reduxState.bookQuestion.selectedQuestionId;
  useEffect(() => {
    const getContents = async (questionIdForPage: any) => {
      const { contents } = await getPageFromQuestion(questionIdForPage);
      setContents(contents);
    };
    getContents(questionId);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  /*                  ↑のコメントアウトは認識されてる         */

  const panes = [
    {
      menuItem: <Label>著者の回答</Label>,
      render: () => (
        <Tab.Pane attached={false}>
          {(() => {
            if (0) {
              return (
                <Card style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                  <Card.Content>
                    <Feed>
                      <Feed.Event>
                        <Feed.Label image="https://drive.google.com/uc?id=1H6_sJtNlwBIcRT4F6oDNY-1Eq4L-JiB3" />
                        <Feed.Content>
                          <Feed.Date content="createdAt" />
                          <Feed.Summary>
                            回答内容をここに書いてください
                          </Feed.Summary>
                        </Feed.Content>
                      </Feed.Event>
                    </Feed>
                  </Card.Content>
                </Card>
              );
            }

            return (
              <Card style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <Card.Content>
                  <Feed>
                    <Feed.Event>
                      <Feed.Content>
                        <Feed.Summary>回答がありません</Feed.Summary>
                      </Feed.Content>
                    </Feed.Event>
                  </Feed>
                </Card.Content>
              </Card>
            );
          })()}
        </Tab.Pane>
      ),
    },
    {
      menuItem: <Label>著者の回答</Label>,
      render: () => (
        <Tab.Pane attached={false}>
          {(() => {
            if (0) {
              return (
                <Card style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                  <Card.Content>
                    <Feed>
                      <Feed.Event>
                        <Feed.Content>
                          <Feed.Summary>回答がありません</Feed.Summary>
                        </Feed.Content>
                      </Feed.Event>
                    </Feed>
                  </Card.Content>
                </Card>
              );
            }

            return (
              <Card style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <Card.Content>
                  <Feed>
                    <Feed.Event>
                      <Feed.Label image="https://drive.google.com/uc?id=1H6_sJtNlwBIcRT4F6oDNY-1Eq4L-JiB3" />
                      <Feed.Content>
                        <Feed.Date content="createdAt" />
                        <Feed.Summary>
                          回答内容をここに書いてください
                        </Feed.Summary>
                      </Feed.Content>
                    </Feed.Event>
                  </Feed>
                </Card.Content>
              </Card>
            );
          })()}
        </Tab.Pane>
      ),
    },
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', height: '100%' }}>
      <Menu>
        <Button
          icon="left arrow"
          onClick={() =>
            dispatch(getBookDetailQuestion.start({ questionId: 0 }))
          }
        />
      </Menu>
      <Header as="h2">1章質問詳細</Header>
      <Divider />
      <div>
        <Card
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '20px',
          }}
        >
          <Card.Content>
            <Card.Header>質問タイトル</Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed>
              <Feed.Event>
                <Feed.Label image="https://drive.google.com/uc?id=1H6_sJtNlwBIcRT4F6oDNY-1Eq4L-JiB3" />
                <Feed.Content>
                  <Feed.Date content="createdAt" />
                  <Feed.Summary>質問内容をここに書いてください</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Card.Content>
        </Card>
      </div>
      <div style={{ margin: '20px' }}>
        <CorrespondingPages contents={pageContents} />
        <AnswerForm />
      </div>

      <Tab panes={panes} />
    </div>
  );
};
