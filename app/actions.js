import Firebase from 'firebase'

const firebase = Firebase.initializeApp({
  apiKey: 'AIzaSyDQDoX9xq72czKS5Dj0lV1aOzjyGB6D7eU',
  authDomain: 'homepage-b1191.firebaseapp.com',
  databaseURL: 'https://homepage-b1191.firebaseio.com',
  storageBucket: 'homepage-b1191.appspot.com'
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
    console.log('HEERRE')
    dispatch(requestGame())
    // fetch game from firebase
  }
}

export function error (error) {
  return {
    type: 'ERROR',
    list: error,
    receivedAt: Date.now()
  }
}
