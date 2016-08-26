import { saveTeam, getTeams, addTeamPlayer, addNewTeamPlayer } from '../../lib/teamsUtils'

export const REQUEST_TEAMS = 'REQUEST_TEAMS'
export const RECEIVE_TEAMS = 'RECEIVE_TEAMS'
export const ADD_PLAYER_TO_TEAM = 'ADD_PLAYER_TO_TEAM'
export const ADD_NEW_PLAYER_TO_TEAM = 'ADD_NEW_PLAYER_TO_TEAM'

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
