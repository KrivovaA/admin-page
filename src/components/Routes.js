import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import MainPage from './../pages/main/MainPage';
import About from './../pages/about/AboutPage';


const Routes = () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route path="/about" component={About} />
  </Switch>
);

export default hot(module)(Routes);


