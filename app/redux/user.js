import { fromJS } from 'immutable'

const INITAL_STATE = fromJS({
  user: {},
  loggedIn: false,
})

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return state
    case 'LOG_OUT':
      return state
    case 'ERROR':
      console.log('ERROR', action.list)
      return state
    default:
      console.log('action.type not known', action.type)
      return state
  }
}