import firebase from './firebaseConfig'

export function getPlayers (recivePlayers) {
  firebase.database().ref('players').on('value', players => {
    recivePlayers(players.val())
  })
}

export function savePlayer (playersObj) {
  const playerKey = firebase.database().ref('players').push().key
  let updates = {}
  updates['players/' + playerKey] = playersObj
  firebase.database().ref().update(updates)
  return playerKey
}

export function getPlayer(playerKey) {
  return firebase.database().ref('players/' + playerKey).once('value')
}
