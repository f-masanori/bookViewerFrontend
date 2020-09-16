import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Button, Modal, Form, Input, TextArea } from 'semantic-ui-react';

const ViewerHeader = (setVisible: any): JSX.Element => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Menu>
        <Menu.Item name="MyPage" />
        <Menu.Menu position="right">
          <Menu.Item>
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
          </Menu.Item>
          <Menu.Item>
            <Button onClick={() => setVisible(true)}> 質問リスト</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default ViewerHeader;
