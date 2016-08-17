import React from 'react'

import TeamTable from './TeamTable'
import EventsTable from './EventsTable'
import { formatTime, formatScore } from '../../lib/formatNumber'

class ScoreGame extends React.Component {

  render () {
    const loading = this.props.fetchingGame
    if(this.props.game.gameKey !== this.props.params.id && !loading) {
      this.props.fetchGame(this.props.params.id)
    }
    const game = this.props.game
    const homePlayers = this.props.game.home_players || []
    const awayPlayers = this.props.game.away_players || []
    const currentTime = formatTime(this.props.game.current_time || 0)
    const homeTeamScore = formatScore(this.props.game.current_score && this.props.game.current_score.home || 0)
    const awayTeamScore = formatScore(this.props.game.current_score && this.props.game.current_score.away || 0)
    const events = this.props.game.events || []
    return (
      <div className='score-game'>
        <div className='team-table-column'>
          <div className='team-logo'>
            <img src="http://placehold.it/250x120?text=LOGO" />
          </div>
          <TeamTable teamName='home team' players={homePlayers}/>
        </div>
        <div className='centre-column'>
          <div className='game-timer'>
            {!loading 
              ? <h1 className='timer' id='gameTimer'> {currentTime} </h1>
              : <h3>Loading Game</h3>}
            <div>Play/Pause(icon)</div>
          </div>
          <div className='scores-board'>
           <div className='score-board'>
            <h1 className='game-score' id='homeTeamScore'>{homeTeamScore}</h1>
            <div>home</div>
           </div>
           <div className='score-board'>
            <h1 className='game-score' id='awayTeamScore'>{awayTeamScore}</h1>
            <div>away</div>
           </div>
          </div>
          <div className='event-buttons'>
            <button className='event-button goal'>Goal</button>
            <button className='event-button yellow-card'>YC</button>
            <button className='event-button two-min'>2 Min</button>
            <button className='event-button red-card'>RC</button>
          </div>
          <EventsTable events={events} />
        </div>
        <div className='team-table-column'>
          <div className='team-logo'>
            <img src="http://placehold.it/250x120?text=LOGO" />
          </div>
          <TeamTable teamName={'away team'} players={awayPlayers}/>
        </div>
      </div>
    )
  }
}

export default ScoreGame
