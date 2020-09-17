import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Modal, Button } from 'semantic-ui-react';

export const CorrespondingPages: React.FC<any> = ({
  contents,
}): JSX.Element => {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>該当ページ</Button>}
    >
      <Modal.Header>該当ページ</Modal.Header>
      <Modal.Content>
        {(() => {
          return (
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  {contents.map((content: any) => (
                    <span>{content}</span>
                  ))}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          );
        })()}
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
