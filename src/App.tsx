/* eslint-disable react/jsx-key, react/jsx-props-no-spreading, jsx-a11y/alt-text */
import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Redirect, Switch } from 'react-router';
import Viewer from './component/pages/BookViewer';
import Home from './component/pages/Home';

import 'semantic-ui-css/semantic.min.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/viewer" component={Viewer} />
        <Route exact path="/" component={Viewer} />
      </Switch>
    </Router>
  );
};

export default App;
