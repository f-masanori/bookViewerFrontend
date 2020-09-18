import React, { ReactHTML } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Table, Modal, Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { getBookDetailQuestion } from '../../actions/bookQuestion';
import { getDetailQuestions } from '../../actions/getDetailQuestions';
import {
  getAnswersFromAuthor,
  getAnswersFromReader,
} from '../../actions/getAnswers';

export const SearchResult: React.FC<any> = ({
  searchResultList,
}): JSX.Element => {
  console.log(searchResultList);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>検索</Button>}
    >
      <Modal.Header>検索結果</Modal.Header>
      <Modal.Content>
        <Table basic="very">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>タイトル</Table.HeaderCell>
              <Table.HeaderCell>詳細</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {searchResultList.map((question: any) => (
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
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          閉じる
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
