
import firebase from './firebaseConfig'

export function logInUser () {
  return firebase.auth().signInWithPopup(provider)
}

export function logOutUser () {
  return firebase.auth().signOut()
}