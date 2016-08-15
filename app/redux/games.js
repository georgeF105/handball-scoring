import { fromJS } from 'immutable'

import * as gamesActions from './gamesActions'

const INITAL_STATE = fromJS({
  game: {},
  fetchingGame: false,
})

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case gamesActions.REQUEST_GAME:
      return state.setIn(['fetchingGame'], true)
    case gamesActions.RECEIVE_GAME:
      return state.setIn(['game'], fromJS(action.list)).set('fetchingGame', false)
    case gamesActions.SAVED_GAME:
      console.log('SAVED_GAME:', action.gameObj)
      return state
    default:
      return state
  }
}
