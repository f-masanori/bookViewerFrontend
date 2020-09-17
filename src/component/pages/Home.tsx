import React, { useState } from 'react';
import { withRouter } from 'react-router';
import ViewerHeader from '../organisms/header';
import { DetailQuestion } from '../organisms/detailQuestion';

const Home = (): JSX.Element => {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ height: '100%' }}>
      <ViewerHeader setVisible={(on: any) => setVisible(on)} />
      <DetailQuestion />
    </div>
  );
};

export default withRouter(Home);
