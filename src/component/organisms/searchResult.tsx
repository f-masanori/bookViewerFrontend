import React, { ReactHTML, useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Table, Modal, Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { getBookDetailQuestion } from '../../actions/bookQuestion';
import { getDetailQuestions } from '../../actions/getDetailQuestions';
import {
  getAnswersFromAuthor,
  getAnswersFromReader,
} from '../../actions/getAnswers';
import { getBookQuestionListFromTitle } from '../../services/forViewer/api';

export const SearchResult: React.FC<any> = ({
  title,questionList,setVisible
}): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  // const [questionList, setQuestionList] = useState<any>([]);
  // useEffect(() => {
  //   const getQuestionList = async (input: string) => {
  //     const { questions } = await getBookQuestionListFromTitle(
  //       input
  //     );
  //     console.log("questions: ")
  //     console.log(questions)
  //     console.log("input: ")
  //     console.log(input)
  //     setQuestionList(questions);
  //   };
  //   getQuestionList(title);
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // /*                  ↑のコメントアウトは認識されてる         */

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>検索</Button>}
    >
      <Modal.Header>検索結果</Modal.Header>
      <Modal.Content>
        {(() => {
          if (questionList.length === 0) {
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
                {questionList.map((question: any) => (
                  <Table.Row>
                    <Table.Cell>{question.title}</Table.Cell>
                    <Table.Cell>
                      <Button
                        onClick={() => {
                          setOpen(false);
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
                          setVisible(true);
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
        })()}
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          閉じる
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
