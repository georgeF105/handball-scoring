import configureStore from '../app/redux/store'
import test from 'tape'
import * as gamesActions from '../app/redux/gamesActions'

test('Request Game Reducer', (t) => {
  const store = configureStore()

  store.dispatch(gamesActions.requestGame())

  t.equal(store.getState().games.get('fetchingGame'), true, 'fetchingGames is true')
  t.end()
})

// test('Recive Game Reducer', (t) => {
//   const store = configureStore()
  
// })

