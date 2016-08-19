import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  const game = props.game
  const homeTeam = props.homeTeam || 'Home Team'
  const awayTeam = props.awayTeam || 'Away Team'
  const deleteGame = props.deleteGame
  return (
    <div className='card game-card'>
      <h5>{homeTeam}</h5>
      <h5>VS</h5>
      <h5>{awayTeam}</h5>
      <p>{game.date} - {game.time}</p>
      <Link to={`/game/${game.gameKey}/score`}>Score Game</Link>
      <i className='fa fa-trash delete-game-icon' name={game.gameKey} onClick={deleteGame} />
    </div>
  )
}
