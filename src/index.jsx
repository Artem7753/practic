import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/components/App';
import ReactRouterDOM from 'react-router-dom';
import Authorization from './app/components/Authorization';
import PostPage from './app/components/PostPage';

const Router = ReactRouterDOM.Router;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;


const app = document.getElementById('app');

ReactDOM.render(
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/autorization" component={Authorization} />
                <Route path="/post" component={PostPage} />
            </Switch>
         </Router>
    ,app);