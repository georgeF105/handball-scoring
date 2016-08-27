import Firebase from 'firebase'

import firebase from './firebaseConfig'

export function logInUser () {
  const provider = new Firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithPopup(provider)
}

export function logOutUser () {
  return firebase.auth().signOut()
}

export function authListener(logIn, logOut) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('user logged in', user)
      logIn(user.uid, user.displayName || user.email)
    } else {
      logOut()
    }
  })
}
