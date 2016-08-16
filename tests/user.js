import test from 'tape'
import configureStore from '../app/redux/store'
import * as userActions from '../app/redux/userActions'

test('logIn User Reducer', (t) => {
  const store = configureStore()
  const userId = 'kjadlhagdalkjda'
  const userName = 'USER TEST NAME'

  store.dispatch(userActions.logIn(userId, userName))

  t.equal(store.getState().user.get('userName'), userName, 'userName = expected')
  t.equal(store.getState().user.get('userId'), userId, 'userId = expected')
  t.equal(store.getState().user.get('loggedIn'), true, 'loggedIn = expected')
  t.end()
})

test('logOut User Reducer', (t) => {
  const store = configureStore()

  store.dispatch(userActions.logOut())

  t.equal(store.getState().user.get('loggedIn'), false, 'loggedIn = expected')
  t.end()
})