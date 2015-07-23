import React from 'react'
import { Router, Route, link } from 'react-router'
import { history } from 'react-router/lib/BrowserHistory'
import Count from './components/Count'
import NoMatch from './components/NoMatch'

// React.render(
//   React.createElement(Count),
//   document.getElementById('main')
// )

React.render((
  <Router history={history}>
    <Route path="/" component={Count}/>
    <Route path="counts" component={NoMatch}/>
    <Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('main'));
