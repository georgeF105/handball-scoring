import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './app/redux/store'
import routes from './app/components/routes'
import { fetchGames } from './app/redux/gamesActions'
import { fetchTeams } from './app/redux/teamsActions'
import { fetchPlayers } from './app/redux/playersActions'
import { attachAuthListener } from './app/redux/userActions'
import './scss/main.scss'

const store = configureStore()

store.dispatch(fetchGames())
store.dispatch(fetchTeams())
store.dispatch(fetchPlayers())
store.dispatch(attachAuthListener())

if (process.env.NODE_ENV !== 'production') console.log('NODE_ENV = ', process.env.NODE_ENV)

render((
  <Provider store={store}>
    <div id='main'>
      {routes}
    </div>
  </Provider>
  ), document.getElementById('app'))
