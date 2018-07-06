/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; //eslint-disable-line

// import Theme from "../styles/Theme";
import Home from '../containers/Home';
import Project from '../containers/Project';
import FlowData from '../containers/FlowData';

const App = () => (
  <div>
    <MuiThemeProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/flowdata" component={FlowData} />
      </Switch>
    </MuiThemeProvider>
  </div>
);

App.propTypes = {
  children: PropTypes.element,
};

export default App;
