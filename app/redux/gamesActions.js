import { saveGame, getGames, updateGameChild, appendPlayersToGame, pushEvent, removeGame } from '../../lib/gamesUtils'
import { hashHistory } from 'react-router'

export const REQUEST_GAMES = 'REQUEST_GAMES'
export const RECEIVE_GAMES = 'RECEIVE_GAMES'

export function initializeGame (gameKey) {
  return (dispatch) => {
    appendPlayersToGame(gameKey)
  }
}

export function submitGame (gameObj) {
  return (dispatch) => {
    const gameKey = saveGame(gameObj)
    gameObj.gameKey = gameKey
    hashHistory.push('/')
  }
}

export function deleteGame (gameKey) {
  return (dispatch) => {
    removeGame(gameKey)
  }
}

export function fetchGames (gameKey) {
  return (dispatch) => {
    dispatch(requestGames())
    getGames(games => {
      dispatch(reciveGames(games))
    })
  }
}

export function requestGames () {
  return {
    type: REQUEST_GAMES
  }
}

export function reciveGames (gamesObj) {
  return {
    type: RECEIVE_GAMES,
    gameObj: gamesObj,
    receivedAt: Date.now()
  }
}

export function setGameKeyValue (gameKey, key, value) {
  return (dispatch) => {
    updateGameChild(gameKey, key, value)
  }
}

export function addEvent (gameKey, eventObj) {
  return (dispatch) => {
    pushEvent(gameKey, eventObj)
  }
}

export function startTimer (gameKey, currentTime) {
  return (dispatch) => {
    updateGameChild(gameKey, 'status_in_play', true)
    updateGameChild(gameKey, 'timer_last_updated', Date.now())
    updateGameChild(gameKey, 'current_time', currentTime)
  }
}

export function pauseTimer (gameKey, currentTime) {
  return (dispatch) => {
    updateGameChild(gameKey, 'status_in_play', false)
    updateGameChild(gameKey, 'timer_last_updated', Date.now())
    updateGameChild(gameKey, 'current_time', currentTime)
  }
}

export function updateTime (gameKey, currentTime) {
  return (dispatch) => {
    updateGameChild(gameKey, 'timer_last_updated', Date.now())
    updateGameChild(gameKey, 'current_time', currentTime)
  }
}

export function error (error) {
  return {
    type: 'ERROR',
    list: error,
    receivedAt: Date.now()
  }
}
