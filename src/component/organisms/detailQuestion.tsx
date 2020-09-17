import React, { useState } from 'react';
import { Grid, Item, Image, Menu, Button, Tab } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { AnswerForm } from '../molecules/answerForm';
import { CorrespondingPages } from './correspondingPages';
import { getBookDetailQuestion } from '../../actions/bookQuestion';

export const DetailQuestion: React.FC<any> = (): JSX.Element => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const panes = [
    {
      menuItem: '著者の回答',
      render: () => (
        <Tab.Pane>
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
        </Tab.Pane>
      ),
    },
    {
      menuItem: '読者の回答',
      render: () => (
        <Tab.Pane>
          {(() => {
            return (
              <Item.Group>
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
            );
          })()}
        </Tab.Pane>
      ),
    },
  ];

  return (
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column />
        <Grid.Column>
          <Menu>
            <Menu.Item>
              <Button icon="left arrow" />
            </Menu.Item>
            <Menu.Item>1章質問詳細</Menu.Item>
          </Menu>
          <Item.Group>
            <Item>
              <Item.Image
                size="tiny"
                src="https://react.semantic-ui.com/images/wireframe/image.png"
              />

              <Item.Content>
                <Item.Header>userName</Item.Header>
                <Item.Description>質問内容</Item.Description>
                <Item.Extra>createdAt</Item.Extra>
              </Item.Content>
            </Item>
            <Item>
              <CorrespondingPages contents={['fjas', 'fjio']} />
              <AnswerForm />
            </Item>
          </Item.Group>
          <Tab panes={panes} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
