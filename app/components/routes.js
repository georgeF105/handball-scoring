import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './App'
import Home from './Home'
import Overview from './Overview'
import NewGameContainer from './containers/NewGameContainer'
import ScoreGameContainer from './containers/ScoreGameContainer'
import NewTeamContainer from './containers/NewTeamContainer'
import EditTeamContainer from './containers/EditTeamContainer'
import DashboardContainer from './containers/DashboardContainer'

export default (
  <Router history={hashHistory}>
    <Route path='/game/:id/score' component={ScoreGameContainer} />
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/game/new' component={NewGameContainer} />
      <Route path='/game' component={Overview} />
      <Route path='/game/:id' component={Home} />
      <Route path='/dashboard' component={DashboardContainer} />
      <Route path='/team/new' component={NewTeamContainer} />
      <Route path='/team/:id/edit' component={EditTeamContainer} />
    </Route>
  </Router>
)
