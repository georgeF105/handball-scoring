import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './app/redux/store'
import routes from './app/components/routes'

const store = configureStore()

render((
  <Provider store={store}>
    <div id='main'>
      {routes}
    </div>
  </Provider>
  ), document.getElementById('app'))
