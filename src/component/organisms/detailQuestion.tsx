import React, { useState } from 'react';
import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Item,
  Image,
  Menu,
  Segment,
  Sidebar,
  Button,
  Tab,
} from 'semantic-ui-react';
import { AnswerForm } from '../molecules/answerForm';
// import { CorrespondingPages } from "../organisms/correspondingPages";

export const DetailQuestion: React.FC<any> = (): JSX.Element => {
  const [visible, setVisible] = useState(false);
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
            if (true) {
              return <p>回答なし</p>;
            }

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
              {/* <CorrespondingPages /> */}
              <AnswerForm />
            </Item>
          </Item.Group>
          <Tab panes={panes} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
