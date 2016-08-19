import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  const game = props.game
  const homeTeam = props.homeTeam || 'Home Team'
  const awayTeam = props.awayTeam || 'Away Team'

  return (
    <div className='card game-card'>
      <h5>{homeTeam}</h5>
      <h5>VS</h5>
      <h5>{awayTeam}</h5>
      <p>{game.date}</p>
      <Link to={`/game/${game.gameKey}/score`}>Score Game</Link>
    </div>
  )
}
