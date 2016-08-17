import { fromJS } from 'immutable'

import * as gamesActions from './gamesActions'

const INITAL_STATE = fromJS({
  game: {},
  fetchingGame: false,
  games: {},
  fetchingGames: false
})

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case gamesActions.REQUEST_GAME:
      return state.setIn(['fetchingGame'], true)
    case gamesActions.RECEIVE_GAME:
      console.log('RECEIVE_GAME', action.gameObj)
      return state.setIn(['game'], fromJS(action.gameObj)).set('fetchingGame', false)
    case gamesActions.SAVED_GAME:
      return state.setIn(['game'], fromJS(action.gameObj)).set('fetchingGame', false)
    case gamesActions.REQUEST_GAMES:
      return state.setIn(['fetchingGames'], true)
    case gamesActions.RECEIVE_GAMES:
      return state.setIn(['games'], fromJS(action.gameObj)).set('fetchingGames', false)
    default:
      return state
  }
}
