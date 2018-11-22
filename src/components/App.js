import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';

import Routes from './Routes';
import DevTools from './DevTools';
import LayoutComponent from './structure/LayoutComponent';

import 'antd/dist/antd.css';

const App = ({ children }) => (
  <React.Fragment>
    <LayoutComponent>
      <Routes />
      {children}
      <DevTools />
    </LayoutComponent>
  </React.Fragment>
);

App.propTypes = {
  children: PropTypes.node
};

export default hot(module)(App);
