
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