import test from 'tape'
import configureStore from '../app/redux/store'
import * as gamesActions from '../app/redux/gamesActions'

test('Request Game Reducer', (t) => {
  const store = configureStore()

  store.dispatch(gamesActions.requestGame())

  t.equal(store.getState().games.get('fetchingGame'), true, 'fetchingGames is true')
  t.end()
})

test('Recive Game Reducer', (t) => {
  const store = configureStore()
  const gameObj = {
    venue:'test venue',
    gameKey: 'testGameKey'
  }

  store.dispatch(gamesActions.reciveGame(gameObj))

  t.deepEqual(store.getState().games.get('game').toJS(), gameObj, 'Game = expected')
  t.equal(store.getState().games.get('fetchingGame'), false, 'fetchingGames is false')
  t.end()
})

test('Saved Game Reducer', (t) => {
  const store = configureStore()
  const gameObj = {
    venue:'test venue',
    gameKey: 'testGameKey'
  }

  store.dispatch(gamesActions.savedGame(gameObj))

  t.deepEqual(store.getState().games.get('game').toJS(), gameObj, 'Game = expected')
  t.equal(store.getState().games.get('fetchingGame'), false, 'fetchingGames is false')
  t.end()
})
