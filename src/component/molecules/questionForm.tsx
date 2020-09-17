import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import { Button, Modal, Form, Input, TextArea } from 'semantic-ui-react';
import { postBookQuestion } from '../../actions/bookQuestion';

export const QuestionForm: React.FC<any> = (): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const [questionParams, setQuestionParams] = useState({
    userId: 0,
    pageNum: 0,
    sentenceId: 0,
    title: '',
    content: '',
  });
  const dispatch = useDispatch();

  const handleChange = (input: any) => (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setQuestionParams({ ...questionParams, [input]: e.target.value });
  };

  const handleSubmit = () => {
    setOpen(false);
    // dispatch(postBookQuestion.start(postQuestion: { questionParams }));
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>質問する</Button>}
    >
      <Modal.Header>質問投稿フォーム</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Group widths="equal">
              <Form.Field
                control={Input}
                label="ページ番号"
                placeholder="ページ番号"
                value={questionParams.pageNum}
                onChange={handleChange('pageNum')}
              />
              <Form.Field
                control={Input}
                label="文章番号"
                placeholder="文章番号"
                value={questionParams.sentenceId}
                onChange={handleChange('sentenceId')}
              />
            </Form.Group>
            <Form.Field
              control={TextArea}
              label="質問タイトル"
              placeholder="質問タイトルをご記入下さい"
              value={questionParams.title}
              onChange={handleChange('title')}
            />
            <Form.Field
              control={TextArea}
              label="質問内容"
              placeholder="質問内容をご記入下さい"
              value={questionParams.content}
              onChange={handleChange('content')}
            />
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          破棄
        </Button>
        <Button color="green" onClick={handleSubmit}>
          投稿
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
