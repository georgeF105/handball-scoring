import { saveGame } from '../../lib/gamesUtils'

export function requestGame () {
  return {
    type: 'REQUEST_GAME'
  }
}

export function reciveGame (gameObj) {
  return {
    type: 'RECEIVE_GAME',
    list: gameObj,
    receivedAt: Date.now()
  }
}

export function fetchGame () {
  return (dispatch) => {
    dispatch(requestGame())
    // fetch game from firebase
  }
}

export function submitGame (gameObj) {
  return (dispatch) => {
    saveGame(gameObj)
  }
}

export function error (error) {
  return {
    type: 'ERROR',
    list: error,
    receivedAt: Date.now()
  }
}
