import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './App'
import Home from './Home'
import NewGameContainer from './containers/NewGameContainer'
import GamesContainer from './containers/GamesContainer'
import ScoreGameContainer from './containers/ScoreGameContainer'

export default (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/game/new' component={NewGameContainer} />
      <Route path='/game/:id' component={ScoreGameContainer} />
      <Route path='/game' component={GamesContainer} />
    </Route>
  </Router>
)
