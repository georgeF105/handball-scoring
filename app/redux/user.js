import { fromJS } from 'immutable'

import * as userActions from './userActions'

const INITAL_STATE = fromJS({
  userName: "",
  userId: 0,
  loggedIn: false,
})

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case userActions.LOG_IN:
      return state.set('user', fromJS(action.userName)).set('userId', fromJS(action.userId)).set('loggedIn', true)
    case userActions.LOG_OUT:
      return state.set('loggedIn', false)
    default:
      return state
  }
}