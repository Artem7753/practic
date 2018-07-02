import React from 'react';
import AppContainer from './components/App';
import { Switch, Route } from 'react-router-dom';
import Authorization from './components/authorization/Authorization';
import PostPage from './components/PostPage';

export const App = () => (
  <Switch>
      <Route exact path="/" component={AppContainer} />
      <Route path="/autorization" component={Authorization} />
      <Route path="/post" component={PostPage} />
  </Switch>
);
