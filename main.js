import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Error from './Error'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="page1" component={Page1} />
      <Route path="page2" component={Page2} />
      <Route path="page3" component={Page3} />
    </Route>
    <Route path="*" component={Error} />
  </Router>
  , document.getElementById('death'))
