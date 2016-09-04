import firebase from './firebaseConfig'

export function pushGame (gameObj) {
  const gameKey = firebase.database().ref('games').push().key
  let updates = {}
  updates['/games/' + gameKey] = gameObj
  firebase.database().ref().update(updates)
  return gameKey
}

export function fetchGames (reciveGames) {
  firebase.database().ref('games').on('value', games => {
    reciveGames(games.val())
  })
}

export function getGame (gameKey) {
  return firebase.database().ref('games/' + gameKey).once('value')
    .then(res => {
      return res.val()
    })
}

export function updateGame (gameKey, gameObj) {
  let updates = {}
  updates['games/' + gameKey] = gameObj
  firebase.database().ref().update(updates)
}

export function deleteGame (gameKey) {
  firebase.database().ref('games/' + gameKey).remove()
}

export function pushEvent (gameKey, eventObj) {
  const eventKey = firebase.database().ref('games/' + gameKey + '/events').push().key
  let updates = {}
  updates['/games/' + gameKey + '/events/' + eventKey] = eventObj
  firebase.database().ref().update(updates)
}

export function deleteEvent (gameKey, eventKey) {
  firebase.database().ref('games/' + gameKey + '/events/' + eventKey).remove()
}

export function updateGameChild (gameKey, key, value) {
  let updates = {}
  updates['games/' + gameKey + '/' + key] = value
  firebase.database().ref().update(updates)
}
