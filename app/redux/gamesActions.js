import { saveGame } from '../../lib/gamesUtils'
import { hashHistory } from 'react-router'

export const SAVED_GAME = 'SAVED_GAME'
export const REQUEST_GAME = 'REQUEST_GAME'
export const RECEIVE_GAME = 'RECEIVE_GAME'

export function requestGame () {
  return {
    type: 'REQUEST_GAME'
  }
}

export function reciveGame (gameObj) {
  return {
    type: 'RECEIVE_GAME',
    gameObj: gameObj,
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
    const gameKey = saveGame(gameObj)
    gameObj.gameKey = gameKey
    dispatch(savedGame(gameObj))
    hashHistory.push('game/' + gameKey)
  }
}

export function savedGame (gameObj) {
  return {
    type: SAVED_GAME,
    gameObj: gameObj
  }
}

export function error (error) {
  return {
    type: 'ERROR',
    list: error,
    receivedAt: Date.now()
  }
}
