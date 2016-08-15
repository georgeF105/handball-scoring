import { fromJS } from 'immutable'

const INITAL_STATE = fromJS({
  game: [],
  fetchingGame: false,
  user: {
    userName: 'Guest'
  }
})

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case 'REQUEST_GAME':
      // console.log('REQUEST_GAME')
      return state.setIn(['fetchingGame'], true)
    case 'RECEIVE_GAME':
      // console.log('RECEIVE_GAME', action.list)
      return state.setIn(['game'], fromJS(action.list)).set('fetchingGame', false)
    case 'ERROR':
      console.log('ERROR', action.list)
      return state
    default:
      console.log('action.type not known', action.type)
      return state
  }
}
