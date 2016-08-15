import { fromJS } from 'immutable'

import * as userActions from './userActions'

const INITAL_STATE = fromJS({
  user: {},
  loggedIn: false,
})

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case userActions.LOG_IN:
      return state
    case userActions.LOG_OUT:
      return state
    default:
      return state
  }
}