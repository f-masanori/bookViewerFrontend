import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Input, Icon, Menu, Button } from 'semantic-ui-react';
import { QuestionForm } from '../molecules/questionForm';

const ViewerHeader: React.FC<any> = ({ setVisible }): JSX.Element => {
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
          <Menu.Item>
            <Input icon placeholder="Search...">
              <input />
              <Button
                onClick={() => {
                  console.log('button押したぞ');
                }}
              >
                検索
              </Button>
            </Input>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default ViewerHeader;
