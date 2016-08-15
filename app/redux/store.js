import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import thunk from 'redux-thunk'

import games from './games'
import user from './user'

const combined = combineReducers({
  games,
  user
})

export default function (initialState) {
  const createFinalStore = compose(
    // redux dev tools
    applyMiddleware(thunk),
    (typeof window !== 'undefined' && window.devToolsExtension)
    ? window.devToolsExtension()
    : f => f
  )(createStore)
  const store = createFinalStore(combined, initialState)
  return store
}