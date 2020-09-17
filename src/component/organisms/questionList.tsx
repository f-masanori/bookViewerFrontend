import React from 'react';
import { Divider, Header, Table } from 'semantic-ui-react';

/* このquestionListを使って質問を表示 */
export const QuestionList: React.FC<any> = ({ questionList }): JSX.Element => {
  console.log(questionList);

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
          <Table.Row>
            <Table.Cell>Pythonについて</Table.Cell>
            <Table.Cell>具体的にできることを教えて</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Pythonの特徴について</Table.Cell>
            <Table.Cell>魅力を教えて</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};
