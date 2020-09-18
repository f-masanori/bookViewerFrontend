import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Modal, Form, Input, TextArea } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { PostQuestion } from '../../services/forViewer/models';
import { PostQuestionData } from '../../services/forViewer/postAPI';
import { getBookQuestionList } from '../../actions/bookQuestion';

export const QuestionForm: React.FC<any> = (): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const [questionParams, setQuestionParams] = useState<PostQuestion>({
    userId: 1,
    sentenceId: 1,
    title: '',
    content: '',
    pageNum: 1,
    rowNum: 0,
  });
  const dispatch = useDispatch();

  const handleChange = (input: any) => (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {

    let val: string | number = e.target.value;
    if (input === 'pageNum' || input === 'sentenceId') {
      val = Number(e.target.value);
      console.log(val);
      if (Number.isNaN(val)) {
        alert('数値のみを入力してください');
        val = 0;
      }
    }

    setQuestionParams({ ...questionParams, [input]: val });
  };

  const handleSubmit = async () => {
    setOpen(false);
    await PostQuestionData(questionParams);
    dispatch(getBookQuestionList.start({ chapterId: 1 }));
  };
  console.log(questionParams);

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
