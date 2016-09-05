import React from 'react'
import { Link } from 'react-router'
import { formatScore } from '../../lib/formatNumber'

export default (props) => {
  const game = props.game
  const homeTeam = props.homeTeam || 'Home Team'
  const awayTeam = props.awayTeam || 'Away Team'
  const homeTeamScore = formatScore(game.current_score && game.current_score.home || 0)
  const awayTeamScore = formatScore(game.current_score && game.current_score.away || 0)

  const deleteGame = props.deleteGame
  const isAdmin = props.isAdmin || false
  const initalized = game.status_initialized || false
  const firstStarted = game.status_firsthalf_started || false
  const firstComp = game.status_firsthalf_completed || false
  const secondStarted = game.status_secondhalf_started || false
  const secondComp = game.status_secondhalf_completed || false
  const gameStatus = firstStarted && firstComp && secondStarted && secondComp
    ? 'Full' : firstStarted && firstComp && secondStarted
    ? "2'nd" : firstStarted && firstComp
    ? 'HT' : firstStarted && initalized
    ? "1'st" : initalized
    ? "1'st" : false

  return (
    <div className='card game-card'>
      <div className='card-heading'>
        <h5>{game.venue}</h5>
        <h5>{game.date} - {game.time}</h5>
        <i className='fa fa-share icon' />
      </div>
      <div className='card-content'>
        {!gameStatus
          ? <h4>Not Started</h4>
          : <div className='card-score'>
            <div className='score'>{homeTeamScore}</div>
            <h4>{gameStatus}</h4>
            <div className='score'>{awayTeamScore}</div>
          </div>}
        <div className='game-teams'>
          <h5 className='team-name'>{homeTeam}</h5>
          <h5>VS</h5>
          <h5 className='team-name'>{awayTeam}</h5>
        </div>
      </div>
      {isAdmin
        ? <div className='card-options'>
          <Link to={`/game/${game.gameKey}`}><i className='fa fa-cog icon' /></Link>
          <Link to={`/game/${game.gameKey}/score`}>Score Game</Link>
          <i className='fa fa-trash delete-game-icon' name={game.gameKey} onClick={deleteGame} />
        </div>
        : null}
    </div>
  )
}
