import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Modal, Form, Input, TextArea } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { PostReplyParams } from '../../services/forViewer/models';
import { PostReply } from '../../services/forViewer/postAPI';
import { ConbineState } from '../../reducer/index';

export const AnswerForm: React.FC<any> = (): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const [answerParams, setAnswerParams] = useState<PostReplyParams>({
    userId: 1,
    questionId: 0,
    content: '',
  });
  const dispatch = useDispatch();

  const handleChange = (input: any) => (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setAnswerParams({ ...answerParams, [input]: e.target.value });
  };

  const handleSubmit = () => {
    setOpen(false);
    //　ここでapi出したり、state更新したり
  };

  const reduxState = useSelector((state: ConbineState) => state);
  const bookQuestionState = reduxState.bookQuestion;

  const [answerParams, setAnswerParams] = useState<PostReplyParams>({
    userId: 1,
    questionId: bookQuestionState.selectedQuestionId,
    content: '',
  });
  const handleChange = (input: any) => (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setAnswerParams({ ...answerParams, [input]: e.target.value });
  };
  const handleSubmit = async () => {
    setOpen(false);
    await PostReply(answerParams);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>回答</Button>}
    >
      <Modal.Header>回答投稿フォーム</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Field
              control={TextArea}
              label="回答内容"
              placeholder="回答内容をご記入下さい"
              value={answerParams.content}
              onChange={handleChange('content')}
            />
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          破棄
        </Button>
        <Button color="green" onClick={() => handleSubmit()}>
          回答
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
