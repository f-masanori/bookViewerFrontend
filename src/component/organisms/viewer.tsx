import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Dimmer, Loader, Grid, Segment } from 'semantic-ui-react';

export const Viewer: React.FC<any> = ({ book }): JSX.Element => {
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

        return (
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                {book.pageForViewer[0].pages[0].sentences.map((sentence: any) =>
                  sentence.hasQuestion ? (
                    <p>
                      <button>
                        <p style={{ fontSize: '5pt' }}>{sentence.sentenceId}</p>
                      </button>
                      <p
                        style={{
                          fontSize: '15pt',
                        }}
                      >
                        {sentence.content}
                      </p>
                    </p>
                  ) : (
                    <p>
                      <p style={{ fontSize: '5pt' }}>{sentence.sentenceId}</p>
                      <p style={{ fontSize: '15pt' }}>{sentence.content}</p>
                    </p>
                  ),
                )}
              </Grid.Column>

              <Grid.Column>
                {book.pageForViewer[0].pages[1].sentences.map((sentence: any) =>
                  sentence.hasQuestion ? (
                    <p>
                      <button>
                        <p style={{ fontSize: '5pt' }}>{sentence.sentenceId}</p>
                      </button>
                      <p
                        style={{
                          fontSize: '15pt',
                        }}
                      >
                        {sentence.content}
                      </p>
                    </p>
                  ) : (
                    <p>
                      <p style={{ fontSize: '5pt' }}>{sentence.sentenceId}</p>
                      <p style={{ fontSize: '15pt' }}>{sentence.content}</p>
                    </p>


                  ),
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        );
      })()}
    </div>
  );
};
