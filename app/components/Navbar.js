import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  const userName = props.userName
  const loggedIn = props.loggedIn
  const logIn = props.logIn
  const logOut = props.logOut
  return (
    <div>
      <div className='container'>
        <div className='header'>
          <h1 className='title'>Handball Scoring</h1>
          <div className='login-bar'>
            {loggedIn ? <button onClick={logOut}>LogOut</button> : <button onClick={logIn}>LogIn</button>}
          </div>
        </div>
        
      </div>
      <hr />
    </div>
  )
}

