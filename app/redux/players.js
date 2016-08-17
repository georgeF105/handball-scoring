import { fromJS } from 'immutable'

import * as playersActions from './playersActions'

const INITAL_STATE = fromJS({
  players: {},
  fetchingPlayers: false
})

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case playersActions.REQUEST_PLAYERS:
      return state.setIn(['fetchingPlayers'], true)
    case playersActions.RECEIVE_PLAYERS:
      return state.setIn(['players'], fromJS(action.playersObj)).set('fetchingPlayers', false)
    default:
      return state
  }
}
