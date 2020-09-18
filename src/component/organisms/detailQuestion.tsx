import React, { useEffect, useState } from 'react';

import {
  Icon,
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
import { ConbineState } from '../../reducer/index';
import { AnswerForm } from '../molecules/answerForm';
import { CorrespondingPages } from './correspondingPages';
import { getBookDetailQuestion } from '../../actions/bookQuestion';
import { getPageFromQuestion } from '../../services/forViewer/api';

export const DetailQuestion: React.FC<any> = (
  bookQuestionState,
): JSX.Element => {
  const [visible, setVisible] = useState(false);

  const [pageContents, setContents] = useState<any>([]);

  const dispatch = useDispatch();

  const reduxState = useSelector((state: ConbineState) => state);
  const { answers } = reduxState;
  const questionId = reduxState.bookQuestion.selectedQuestionId;
  const { detailQuestions } = reduxState.detailQuestions;
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
            if (answers.answersFromAuthor.answers.length === 0) {
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
              <div>
                {answers.answersFromAuthor.answers.map(answer => (
                  <Card style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Card.Content description>
                      <Feed>
                        <Feed.Event>
                          <Feed.Label image="https://drive.google.com/uc?id=1H6_sJtNlwBIcRT4F6oDNY-1Eq4L-JiB3" />
                          <Feed.Content>
                            <Feed.Date content={answer.createdAt} />
                            <Feed.Summary>{answer.content}</Feed.Summary>
                          </Feed.Content>
                        </Feed.Event>
                      </Feed>
                    </Card.Content>
                    <Card.Content extra>
                      <Icon name="heart outline" />
                      {answer.likeNum} hearts
                    </Card.Content>
                  </Card>
                ))}
              </div>
            );
          })()}
        </Tab.Pane>
      ),
    },
    {
      menuItem: <Label>読者の回答</Label>,
      render: () => (
        <Tab.Pane attached={false}>
          {(() => {
            if (answers.answersFromReader.answers.length === 0) {
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
              <div>
                {answers.answersFromReader.answers.map(answer => (
                  <Card style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Card.Content description>
                      <Feed>
                        <Feed.Event>
                          <Feed.Label image="https://drive.google.com/uc?id=1H6_sJtNlwBIcRT4F6oDNY-1Eq4L-JiB3" />
                          <Feed.Content>
                            <Feed.Date content={answer.createdAt} />
                            <Feed.Summary>{answer.content}</Feed.Summary>
                          </Feed.Content>
                        </Feed.Event>
                      </Feed>
                    </Card.Content>
                    <Card.Content extra>
                      <Icon name="heart outline" />
                      {answer.likeNum} hearts
                    </Card.Content>
                  </Card>
                ))}
              </div>
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
            <Card.Header>{detailQuestions.title}</Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed>
              <Feed.Event>
                <Feed.Label image="https://drive.google.com/uc?id=1H6_sJtNlwBIcRT4F6oDNY-1Eq4L-JiB3" />
                <Feed.Content>
                  <Feed.Date content={detailQuestions.createdAt} />
                  <Feed.Summary>{detailQuestions.content}</Feed.Summary>
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
