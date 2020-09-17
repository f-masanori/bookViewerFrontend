import React from 'react';
import { Header, Divider, Table, Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { getBookDetailQuestion } from '../../actions/bookQuestion';
import {
  getAnswersFromAuthor,
  getAnswersFromReader,
} from '../../actions/getAnswers';
import { getDetailQuestions } from '../../actions/getDetailQuestions';
/* このquestionListを使って質問を表示 */
export const QuestionList: React.FC<any> = ({ questionList }): JSX.Element => {
  console.log(questionList);
  const dispatch = useDispatch();

  return (
    <div
      style={{ backgroundColor: '#FFFFFF', padding: '20px', height: '100%' }}
    >
      <Header as="h2">質問リスト</Header>
      <Divider />
      <Table basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>タイトル</Table.HeaderCell>
            <Table.HeaderCell>詳細</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {questionList.map((question: any) => (
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
    </div>
  );
};
