import { savePlayer, getPlayers } from '../../lib/playersUtils'
import { hashHistory } from 'react-router'

export const REQUEST_PLAYERS = 'REQUEST_PLAYERS'
export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS'

export function submitTeam (playerObj) {
  return (dispatch) => {
    savePlayer(playerObj)
    hashHistory.push('/')
  }
}

export function fetchPlayers () {
  return (dispatch) => {
    dispatch(requestPlayers())
    getPlayers(players => {
      dispatch(recivePlayers(players))
    })
  }
}

export function requestPlayers () {
  return {
    type: REQUEST_PLAYERS
  }
}

export function recivePlayers (playersObj) {
  return {
    type: RECEIVE_PLAYERS,
    playersObj: playersObj,
    receivedAt: Date.now()
  }
}

export function error (error) {
  return {
    type: 'ERROR',
    list: error,
    receivedAt: Date.now()
  }
}
