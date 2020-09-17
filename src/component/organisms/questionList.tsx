import React from 'react';
import { Divider, Header, Table, Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookDetailQuestion } from '../../actions/bookQuestion';
/* このquestionListを使って質問を表示 */
export const QuestionList: React.FC<any> = ({ questionList }): JSX.Element => {
  console.log(questionList);
  const dispatch = useDispatch();

  return (
    <div style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
      <Header as="h2">質問リスト</Header>
      <Divider />
      <Table basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>タイトル</Table.HeaderCell>
            <Table.HeaderCell>質問内容</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {questionList.map((question: any) => (
            <Table.Row>
              <Table.Cell>
                <Button
                  onClick={() =>
                    dispatch(getBookDetailQuestion.start({ questionId: question.questionId }))
                  }
                >
                  {question.title}
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
          {/* <Table.Row>
            <Table.Cell>
              <Button
                onClick={() =>
                  dispatch(getBookDetailQuestion.start({ questionId: 1 }))
                }
              >
                Pythonについて
              </Button>
            </Table.Cell>
            <Table.Cell>具体的にできることを教えて</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Button onClick={() => console.log(2)}>
                Pythonの特徴について
              </Button>
            </Table.Cell>
            <Table.Cell>魅力を教えて</Table.Cell>
          </Table.Row> */}
        </Table.Body>
      </Table>
    </div>
  );
};
