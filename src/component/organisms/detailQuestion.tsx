import React, { useState } from 'react';


import { Grid, Item, Image, Menu, Button, Tab } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';

import { AnswerForm } from '../molecules/answerForm';
import { CorrespondingPages } from './correspondingPages';
import { getBookDetailQuestion } from '../../actions/bookQuestion';

export const DetailQuestion: React.FC<any> = (bookQuestionState): JSX.Element => {
  const [visible, setVisible] = useState(false);

  console.log(bookQuestionState);

  const dispatch = useDispatch();

  const panes = [
    {
      menuItem: '著者の回答',
      render: () => (
        <Tab.Pane>
          {(() => {
            if (0) {
              return (
                <Item.Group>
                  <Item>
                    <Item.Image
                size="tiny"
                src="https://react.semantic-ui.com/images/wireframe/image.png"

                onClick={() =>
                  dispatch(getBookDetailQuestion.start({ questionId: 0 }))
                }
              />

                    <Item.Content>
                      <Item.Header>Header</Item.Header>
                      <Item.Meta>Description</Item.Meta>
                      <Item.Description>
                        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
                      </Item.Description>
                      <Item.Extra>Additional Details</Item.Extra>
                    </Item.Content>
                  </Item>
                </Item.Group>
              );
            } else {
              return <p>回答なし</p>;
            }
          })()}
        </Tab.Pane>
      ),
    },
    {
      menuItem: '読者の回答',
      render: () => (
        <Tab.Pane>
          {(() => {
            if (0) {
              return <p>回答なし</p>;
            } else {
              return (
                <Item.Group>
                  <Item>
                    {/* <Item.Image
                size="tiny"
                src="https://react.semantic-ui.com/images/wireframe/image.png"
              /> */}

                    <Item.Content>
                      <Item.Header>Header</Item.Header>
                      <Item.Meta>Description</Item.Meta>
                      <Item.Description>
                        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
                      </Item.Description>
                      <Item.Extra>Additional Details</Item.Extra>
                    </Item.Content>
                  </Item>
                </Item.Group>
              );
            }
          })()}
        </Tab.Pane>
      ),
    },
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      <Menu>
        <Menu.Item>
          <Button icon="left arrow" />
        </Menu.Item>
        <Menu.Item>1章質問詳細</Menu.Item>
      </Menu>
      <Item.Group style={{ padding: '10px' }}>
        <Item>
          <Item.Image
            size="tiny"
            src="https://react.semantic-ui.com/images/wireframe/image.png"
          />

          <Item.Content>
            <Item.Header>Header</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
            </Item.Description>
            <Item.Extra>Additional Details</Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
      <div>
        <CorrespondingPages contents={['fjas', 'fjio']} />
        <AnswerForm />
      </div>

      <div style={{ color: 'black', padding: '10px' }}>
        <Tab panes={panes} />
      </div>
    </div>
  );
};
