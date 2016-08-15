import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import configureStore from './app/redux/store'
// import reducer from './app/reducer'
import routes from './app/components/routes'

const store = configureStore()

render((
  <Provider store={store}>
    <div id='main'>
      {routes}
    </div>
  </Provider>
  ), document.getElementById('app'))
