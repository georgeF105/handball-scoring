import firebase from './firebaseConfig'

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

export function addTeamPlayer(teamKey, playerKey, number) {
  const playerTeamKey = firebase.database().ref('teams/players').push().key
  let updates = {}
  updates['teams/players/' + playerTeamKey] = {key: playerKey, number}
  firebase.database().ref().update(updates)
}

export function addNewTeamPlayer(teamKey, playerObj, number) {
  const playerKey = firebase.database().ref('players').push().key
  const playerTeamKey = firebase.database().ref('teams/players').push().key
  let updates = {}
  updates['/players/' + playerKey] = playerObj
  updates['teams/players/' + playerTeamKey] = {key: playerKey, number}
  firebase.database().ref().update(updates)
}