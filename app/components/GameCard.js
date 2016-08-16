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
      <div>home_team {game.home_team}</div>
      <div>away_team {game.away_team}</div>
      <Link to={`/game/${game.gameKey}`}>Game link</Link>
    </div>
  )
}