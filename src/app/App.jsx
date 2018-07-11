import React from 'react';
import AppContainer from './components/MainPage';
import { Switch, Route } from 'react-router-dom';
import Authorization from './components/authorization/Authorization';
import PostPage from './components/PostPage';
import {connect} from 'react-redux';
import store from './stores/reduxStore';

export const App = () => (
  <Switch>
      <Route exact path="/" component={AppContainer} />
      <Route path="/autorization" component={Authorization} />
      <Route path="/post" component={PostPage}/>
  </Switch>
);

function mapStateToProps(store){
  return {
      posts : store.posts.posts,
      is_loading : store.posts.is_loading
  }
}

export default connect(mapStateToProps)(App);