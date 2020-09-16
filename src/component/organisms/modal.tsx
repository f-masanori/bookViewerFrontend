import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Button, Modal, Form, Input, TextArea } from 'semantic-ui-react';

const ViewerHeader = (): JSX.Element => {
  const [open, setOpen] = React.useState(false);

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
          
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          破棄
        </Button>
        <Button color="green" onClick={() => setOpen(false)}>
          投稿
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ViewerHeader;
