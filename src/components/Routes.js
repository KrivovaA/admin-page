import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';



const Routes = () => (
  <Switch>
    {/*<Route exact path="/" component={SomeComponent} />*/}
    {/*<Route path="/about" component={About} />*/}
  </Switch>
);

export default hot(module)(Routes);


