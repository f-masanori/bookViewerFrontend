import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
  Dimmer,
  Loader,
  Grid,
  Segment,
  Table,
  Modal,
  Button,
} from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { getBookDetailQuestion } from '../../actions/bookQuestion';
import { getDetailQuestions } from '../../actions/getDetailQuestions';
import { ModalFrame } from '../molecules/modalFrame';
import { getBookQuestionListFromSentence } from '../../services/forViewer/api';
import {
  getAnswersFromAuthor,
  getAnswersFromReader,
} from '../../actions/getAnswers';

export const Viewer: React.FC<any> = ({ book }): JSX.Element => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [content, setContent] = React.useState(<div>jjj</div>);
  const modalContent = (temp: any) => temp;
  const modalHeader = () => <h2>質問リスト</h2>;
  const modalActions = () => <div />;
  const dispatch = useDispatch();
  // let content = <div>jjj</div>;

  async function displayQuestionList(sentenceId: number) {
    const { questions } = await getBookQuestionListFromSentence(sentenceId);
    console.log(questions);
    const tempContent = (tquestions: any) => {
      if (tquestions.length === 0) {
        return <h3>該当する質問はありません</h3>;
      }

      return (
        <Table basic="very">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>タイトル</Table.HeaderCell>
              <Table.HeaderCell>詳細</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {tquestions.map((question: any) => (
              <Table.Row>
                <Table.Cell>{question.title}</Table.Cell>
                <Table.Cell>
                  <Button
                    onClick={() => {
                      dispatch(
                        getBookDetailQuestion.start({
                          questionId: question.questionId,
                        }),
                      );
                      dispatch(
                        getDetailQuestions.start({
                          questionId: question.questionId,
                        }),
                      );
                      dispatch(
                        getAnswersFromAuthor.start({
                          questionId: question.questionId,
                        }),
                      );
                      dispatch(
                        getAnswersFromReader.start({
                          questionId: question.questionId,
                        }),
                      );
                    }}
                  >
                    質問詳細へ
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      );
    };

    setContent(tempContent(questions));
    setModalOpen(true);
  }

  return (
    <div>
      {(() => {
        if (book.pageForViewer.length === 0) {
          return (
            <Segment>
              <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer>
            </Segment>
          );
        }

        return (
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <ModalFrame
                  open={modalOpen}
                  setOpen={setModalOpen}
                  modalContent={modalContent}
                  modalHeader={modalHeader}
                  modalActions={modalActions}
                  content={content}
                />
                {book.pageForViewer[0].pages[0].sentences.map((sentence: any) =>
                  sentence.hasQuestion ? (
                    <p>
                      <button
                        type="button"
                        onClick={() => displayQuestionList(sentence.sentenceId)}
                      >
                        <p style={{ fontSize: '5pt' }}>{sentence.sentenceId}</p>
                      </button>
                      <p
                        style={{
                          fontSize: '15pt',
                        }}
                      >
                        {sentence.content}
                      </p>
                    </p>
                  ) : (
                    <p>
                      <p style={{ fontSize: '5pt' }}>{sentence.sentenceId}</p>
                      <p style={{ fontSize: '15pt' }}>{sentence.content}</p>
                    </p>
                  ),
                )}
              </Grid.Column>

              <Grid.Column>
                {book.pageForViewer[0].pages[1].sentences.map((sentence: any) =>
                  sentence.hasQuestion ? (
                    <p>
                      <button type="button">
                        <p style={{ fontSize: '5pt' }}>{sentence.sentenceId}</p>
                      </button>
                      <p
                        style={{
                          fontSize: '15pt',
                        }}
                      >
                        {sentence.content}
                      </p>
                    </p>
                  ) : (
                    <p>
                      <p style={{ fontSize: '5pt' }}>{sentence.sentenceId}</p>
                      <p style={{ fontSize: '15pt' }}>{sentence.content}</p>
                    </p>


                  ),
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        );
      })()}
    </div>
  );
};
