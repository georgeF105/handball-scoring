
import firebase from './firebaseConfig'

export function saveGame (gameObj) {
  const gameKey = firebase.database().ref('games').push().key
  let updates = {}
  updates['/games/' + gameKey] = gameObj
  firebase.database().ref().update(updates)
  return gameKey
}

export function getGames (reciveGames) {
  firebase.database().ref('games').on('value', games => {
    reciveGames(games.val())
  })
}

export function getGame (gameKey) {
  return firebase.database().ref('games/' + gameKey).once('value')
    .then(game => {
      return game.val()
    })
}

export function getTeam (teamKey) {
  return firebase.database().ref('teams/' + teamKey).once('value')
    .then(team => {
      return team.val()
    })
}
