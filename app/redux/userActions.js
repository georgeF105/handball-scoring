import { logInUser, logOutUser, authListener } from '../../lib/authUtils'

export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'

export function logIn (userId, userName) {
  return {
    type: 'LOG_IN',
    userId,
    userName
  }
}

export function logOut () {
  return {
    type: 'LOG_OUT'
  }
}

export function attemptLogIn () {
  return (dispatch) => {
    logInUser()
      .then(result => {
        console.log('user logged in:', result)
        dispatch(logIn(result.user.uid, result.user.displayName || result.user.email))
      })
      .catch(err => {
        console.error(err)
      })
  }
}

export function attemptLogOut () {
  return (dispatch) => {
    logOutUser()
      .then(f => {
        console.log('user logged out')
        dispatch(logOut())
      })
      .catch(err => {
        console.error(err)
      })
  }
}

export function attachAuthListener () {
  return (dispatch) => {
    authListener((userId, userName) => {
      dispatch(logIn(userId, userName))
    },
      dispatch(logOut))
  }
}
