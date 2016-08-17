import { saveTeam, getTeams } from '../../lib/teamsUtils'
import { hashHistory } from 'react-router'

export const REQUEST_TEAMS = 'REQUEST_TEAMS'
export const RECEIVE_TEAMS = 'RECEIVE_TEAMS'

export function submitTeam (teamObj) {
  return (dispatch) => {
    saveTeam(teamObj)
    hashHistory.push('/')
  }
}

export function fetchTeams () {
  return (dispatch) => {
    dispatch(requestTeams())
    getTeams(teams => {
      dispatch(reciveTeams(teams))
    })
  }
}

export function requestTeams () {
  return {
    type: REQUEST_TEAMS
  }
}

export function reciveTeams (teamsObj) {
  return {
    type: RECEIVE_TEAMS,
    teamsObj: teamsObj,
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
