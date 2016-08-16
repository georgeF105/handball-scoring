import React from 'react'

export default (props) => {
  const userName = props.userName
  const loggedIn = props.loggedIn
  const logIn = props.logIn
  const logOut = props.logOut
  return (
    <div>
      <div className='container'>
        <div className='header'>
          <h3 className='title'>Handball Scoring</h3>
          {loggedIn
            ? <div className='login-bar'>
              <div className='user-name'>{userName}</div>
              <button onClick={logOut}>LogOut</button>
            </div>
            : <div className='login-bar'>
              <button onClick={logIn}>LogIn</button>
            </div>}
        </div>

      </div>
      <hr />
    </div>
  )
}

