import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Input, Icon, Menu, Button } from 'semantic-ui-react';
import { QuestionForm } from '../molecules/questionForm';
import { SearchResult } from './searchResult';
import { getBookQuestionListFromTitle } from '../../services/forViewer/api';

const ViewerHeader: React.FC<any> = ({ setVisible }): JSX.Element => {

  const [title, setTitle] = useState('');
  const [questionList, setQuestionList] = useState<any>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    const getQuestionList = async (input: string) => {
      const { questions } = await getBookQuestionListFromTitle(input);
      setQuestionList(questions);
    };
    getQuestionList(title);
  };

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
            <Input
              icon
              placeholder="Search..."
              value={title}
              onChange={handleChange}
            >
              <input />
              <SearchResult
                title={title}
                questionList={questionList}
                // searchResultList={[
                //   {
                //     questionId: 1,
                //     title: 'Pythonについて',
                //     userName: 'Author',
                //     createdAt: '2020-09-16 04:24:14',
                //   },
                // ]}
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
