import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './app/redux/store'
import routes from './app/components/routes'
import { fetchGames } from './app/redux/gamesActions'
import { fetchTeams } from './app/redux/teamsActions'
import { fetchPlayers } from './app/redux/playersActions'

const store = configureStore()

store.dispatch(fetchGames())
store.dispatch(fetchTeams())
store.dispatch(fetchPlayers())

render((
  <Provider store={store}>
    <div id='main'>
      {routes}
    </div>
  </Provider>
  ), document.getElementById('app'))
