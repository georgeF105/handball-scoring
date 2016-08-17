import React from 'react'

import TeamTable from './TeamTable'
import EventsTable from './EventsTable'
import { formatTime, formatScore } from '../../lib/formatNumber'

class ScoreGame extends React.Component {

  render () {
    const game = this.props.game
    const homePlayers = this.props.game.home_players
    const awayPlayers = this.props.game.away_players
    const currentTime = formatTime(this.props.game.current_time)
    const homeTeamScore = formatScore(this.props.game.current_score.home)
    const awayTeamScore = formatScore(this.props.game.current_score.away)
    const events = this.props.game.events
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
            <h3 className='timer' id='gameTimer'> {currentTime} </h3>
            <div>Play/Pause(icon)</div>
          </div>
          <div className='scores-board'>
           <div className='score-board'>
            <h3 className='game-score' id='homeTeamScore'>{homeTeamScore}</h3>
            <div>home</div>
           </div>
           <div className='score-board'>
            <h3 className='game-score' id='awayTeamScore'>{awayTeamScore}</h3>
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
          <TeamTable teamName={'away team'} players={homePlayers}/>
        </div>
      </div>
    )
  }
}

export default ScoreGame
