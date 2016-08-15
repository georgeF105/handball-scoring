import Firebase from 'firebase'

import firebase from './firebaseConfig'

export function logInUser () {
  const provider = new Firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithPopup(provider)
}

export function logOutUser () {
  return firebase.auth().signOut()
}