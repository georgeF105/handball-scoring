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
