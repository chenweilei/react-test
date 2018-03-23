import React from 'react';
import ReactDOM from 'react-dom';
import asyncComponent from './asyncComponent'
import {
  //HashRouter,
  BrowserRouter,
  Route,
  //Link,
  //Switch
} from 'react-router-dom';
import './index.css';
import './weui.min.css'
import registerServiceWorker from './registerServiceWorker';

import Nav from './Nav'
const App = asyncComponent(() => import('./App'))
const Kuaidi = asyncComponent(() => import('./Kuaidi'))
const List = asyncComponent(() => import('./List'))

ReactDOM.render(

  (<BrowserRouter>
    <div>
        <Route exact path="/" component={App} />
        <Route exact path="/kuaidi" component={Kuaidi} />
        <Route exact path="/list" component={List} />
        <Nav></Nav>
    </div>
  </BrowserRouter>)
	, document.getElementById('root'));
registerServiceWorker();
