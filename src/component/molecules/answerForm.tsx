import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Modal, Form, Input, TextArea } from 'semantic-ui-react';

export const AnswerForm: React.FC<any> = (): JSX.Element => {
  const [open, setOpen] = React.useState(false);

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
              placeholder="回答をご記入下さい"
            />
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          破棄
        </Button>
        <Button color="green" onClick={() => setOpen(false)}>
          回答
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
