import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Button, Modal, Form, Input, TextArea } from 'semantic-ui-react';
import { QuestionForm } from '../molecules/questionForm';

const ViewerHeader: React.FC<any> = ({ setVisible }): JSX.Element => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Menu>
        <Menu.Item name="MyPage" />
        <Menu.Menu position="right">
          <Menu.Item>
            <QuestionForm />
          </Menu.Item>
          <Menu.Item>
            <Button
              onClick={() => {
                setVisible(true);
              }}
            >
              {' '}
              質問リスト
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default ViewerHeader;
