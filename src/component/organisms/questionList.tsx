import React from 'react';
import { Menu, Divider, Table, Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookDetailQuestion } from '../../actions/bookQuestion';
/* このquestionListを使って質問を表示 */
export const QuestionList: React.FC<any> = ({ questionList }): JSX.Element => {
  console.log(questionList);
  const dispatch = useDispatch();

  return (
    <div style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
      <Menu>
        <Button icon="left arrow" />
        <div>
          <h2>質問リスト</h2>
        </div>
      </Menu>
      <Divider />
      <Table basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>タイトル</Table.HeaderCell>
            <Table.HeaderCell>詳細</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {/* {questionList.map((question: any) => (
            <Table.Row>
              <Table.Cell>question.title</Table.Cell>
              <Table.Cell>
                <Button
                  onClick={() =>
                    dispatch(
                      getBookDetailQuestion.start({
                        questionId: question.questionId,
                      }),
                    )
                  }
                >
                  質問詳細へ
                </Button>
              </Table.Cell>
            </Table.Row>
          ))} */}
        </Table.Body>
      </Table>
    </div>
  );
};
