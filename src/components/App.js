import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';

import Routes from './Routes';
import DevTools from './DevTools';
import Menu from './structure/Menu';


const App = ({ children }) => (
  <div>
    <Menu />
    <Routes />
    {children}
    <DevTools />
  </div>
);

App.propTypes = {
  children: PropTypes.node
};

export default hot(module)(App);
