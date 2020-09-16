import React from 'react';
import { withRouter } from 'react-router';
import ViewerHeader from '../organisms/header';

const Home = (): JSX.Element => {
  return <ViewerHeader />;
};

export default withRouter(Home);
