import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App';
import { BrowserRouter } from 'react-router-dom';
import './vendors';
import {Provider} from 'react-redux';
import store from './app/stores/reduxStore';

ReactDOM.render((
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
), document.getElementById('root'));
