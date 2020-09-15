import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import ViewerHeader from '../organisms/header';


const Home = (): JSX.Element => {
  return <ViewerHeader></ViewerHeader>;
};

export default withRouter(Home);
