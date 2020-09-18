import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Input, Icon, Menu, Button } from 'semantic-ui-react';
import { QuestionForm } from '../molecules/questionForm';
import { SearchResult } from './searchResult';

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
              <SearchResult
                searchResultList={[
                  {
                    questionId: 1,
                    title: 'Pythonについて',
                    userName: 'Author',
                    createdAt: '2020-09-16 04:24:14',
                  },
                ]}

                setVisible={(on: boolean) => setVisible(on)}

              />
            </Input>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default ViewerHeader;
