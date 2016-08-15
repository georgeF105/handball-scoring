import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  return (
    <div className='container content home'>
      <h2>Homepage</h2>
      <p> An app for scoring Handball games</p>
      <Link to='game/new'>New Game</Link>
    </div>
  )
}
