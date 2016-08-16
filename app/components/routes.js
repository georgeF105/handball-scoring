import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './App'
import Home from './Home'
import NewGameContainer from './containers/NewGameContainer'
import Games from './Games'

export default (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/game/new' component={NewGameContainer} />
      <Route path='/game/:id' component={Home} />
      <Route path='/game/' component={Games} />
    </Route>
  </Router>
)
