import { saveGame, getGames, updateGameChild, appendPlayersToGame, createEvent, removeGame, undoEvent, startGameTimer, pauseGameTimer, updateGameTime } from '../../lib/gamesUtils'
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

export function addEvent (gameKey, teamKey, playerGameKey, type, time) {
  return (dispatch) => {
    createEvent(gameKey, teamKey, playerGameKey, type, time)
  }
}

export function deleteEvent (game, eventKey) {
  return (dispatch) => {
    undoEvent(game, eventKey)
  }
}

export function startTimer (gameKey, currentTime) {
  return (dispatch) => {
    startGameTimer(gameKey, currentTime)
  }
}

export function pauseTimer (gameKey, currentTime) {
  return (dispatch) => {
    pauseGameTimer(gameKey, currentTime)
  }
}

export function updateTime (gameKey, currentTime) {
  return (dispatch) => {
    updateGameTimer(gameKey, currentTime)
  }
}

export function error (error) {
  return {
    type: 'ERROR',
    list: error,
    receivedAt: Date.now()
  }
}
