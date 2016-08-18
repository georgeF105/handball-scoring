
import firebase from './firebaseConfig'

export const EVENT_GOAL = 'goal'
export const EVENT_7_METER = '7m'
export const EVENT_YELLOW_CARD = 'yc'
export const EVENT_2_MINUTE = '2m'
export const EVENT_RED_CARD = 'rc'

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
