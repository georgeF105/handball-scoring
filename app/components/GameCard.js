import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  const game = props.game
  return (
    <div className='card game-card'>
      <div>venue {game.venue}</div>
      <div>date {game.date}</div>
      <div>time {game.time}</div>
      <div>gender {game.gender}</div>
      {game.ownedByCurrentUser ? <Link to={`/game/${game.gameKey}/score`}>Score Game</Link> : null}
    </div>
  )
}
