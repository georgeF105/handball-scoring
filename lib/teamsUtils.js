import firebase from './firebaseConfig'
import { savePlayer } from './playersUtils'

export function getTeams (reciveTeams) {
  firebase.database().ref('teams').on('value', teams => {
    reciveTeams(teams.val())
  })
}

export function saveTeam (teamObj) {
  const teamKey = firebase.database().ref('teams').push().key
  let updates = {}
  updates['/teams/' + teamKey] = teamObj
  firebase.database().ref().update(updates)
  return teamKey
}

export function addTeamPlayer (teamKey, playerKey, number) {
  const playerTeamKey = firebase.database().ref('teams/players').push().key
  let updates = {}
  updates['teams/' + teamKey + '/players/' + playerTeamKey] = {key: playerKey, number}
  firebase.database().ref().update(updates)
}

export function addNewTeamPlayer (teamKey, playerObj, number) {
  const playerKey = savePlayer(playerObj)
  const playerTeamKey = firebase.database().ref('teams/players').push().key
  let updates = {}
  updates['teams/' + teamKey + '/players/' + playerTeamKey] = {key: playerKey, number}
  firebase.database().ref().update(updates)
}
