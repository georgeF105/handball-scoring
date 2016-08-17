import { fromJS } from 'immutable'

import * as teamsActions from './teamsActions'

const INITAL_STATE = fromJS({
  teams: {},
  fetchingTeams: false
})

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case teamsActions.REQUEST_TEAMS:
      return state.setIn(['fetchingTeams'], true)
    case teamsActions.RECEIVE_TEAMS:
      return state.setIn(['teams'], fromJS(action.teamsObj)).set('fetchingTeams', false)
    default:
      return state
  }
}
