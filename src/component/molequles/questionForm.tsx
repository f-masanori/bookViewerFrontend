import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Form, Input, TextArea } from 'semantic-ui-react';

const QuestionForm = (): JSX.Element => {

  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Field
          control={Input}
          label="ページ番号"
          placeholder="ページ番号"
        />
        <Form.Field
          control={Input}
          label="文章の先頭行番号"
          placeholder="文章の先頭行番号"
        />
      </Form.Group>
      <Form.Field
        control={TextArea}
        label="質問タイトル"
        placeholder="質問タイトルをご記入下さい"
      />
      <Form.Field
        control={TextArea}
        label="質問内容"
        placeholder="質問内容をご記入下さい"
      />
    </Form>
  );
};

export default QuestionForm;
