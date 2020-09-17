import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Dimmer, Loader, Grid, Segment } from 'semantic-ui-react';

export const Viewer: React.FC<any> = ({ book }): JSX.Element => {
  console.error(book);

  return (
    <div>
      {(() => {
        if (book.pageForViewer.length === 0) {
          return (
            <Segment>
              <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer>
            </Segment>
          );
        }
        else {
          return (
            <Grid columns={2} divided>
              <Grid.Row>
                <Grid.Column>
                  {book.pageForViewer[0].pages[0].sentences.map(
                    (sentence: any) => (
                      <span>{sentence.content}</span>
                    ),
                  )}
                </Grid.Column>
                <Grid.Column>
                  {book.pageForViewer[0].pages[0].sentences.map(
                    (sentence: any) => (
                      <span>{sentence.content}</span>
                    ),
                  )}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          );
        }
      })()}
    </div>
  );
};
