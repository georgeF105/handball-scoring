import Firebase from 'firebase'

const firebase = Firebase.initializeApp({
  apiKey: "AIzaSyCtSSC3XpY0WxucI7bm-pLbgsjWBPTUqPQ",
    authDomain: "handball-scoring.firebaseapp.com",
    databaseURL: "https://handball-scoring.firebaseio.com",
    storageBucket: "handball-scoring.appspot.com"
})

export function requestGame () {
  return {
    type: 'REQUEST_GAME'
  }
}

export function reciveGame (gameObj) {
  return {
    type: 'RECEIVE_GAME',
    list: gameObj,
    receivedAt: Date.now()
  }
}

export function fetchGame () {
  return (dispatch) => {
    dispatch(requestGame())
    // fetch game from firebase
  }
}

export function submitGame (gameObj) {
  return (dispatch) => {
    console.log('submitGame:', gameObj)
    const gameKey = firebase.database().ref('games').push().key
    console.log('gameKey',gameKey)
    let updates = {}
    updates['/games/' + gameKey] = gameObj
    firebase.database().ref().update(updates)
  }
}

export function error (error) {
  return {
    type: 'ERROR',
    list: error,
    receivedAt: Date.now()
  }
}
