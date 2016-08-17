import React from 'react'
import TeamTable from './TeamTable'

import { formatTime, formatScore } from '../../lib/formatNumber'

class ScoreGame extends React.Component {

  render () {
    const game = this.props.game
    const homePlayers = this.props.game.home_players
    const awayPlayers = this.props.game.away_players
    const currentTime = formatTime(this.props.game.current_time)
    const homeTeamScore = formatScore(this.props.game.current_score.home)
    const awayTeamScore = formatScore(this.props.game.current_score.away)
    const events = this.props.events
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
          <div className='event-table card'>
            <div className='heading'> <div>Events</div> </div>
            <div className='events'>
              <div className='event'> Home Team - Player 1 - Scores a goal - 25:10</div>
              <div className='event'> Away Team - Player 6 - Scores a goal - 20:55</div>
              <div className='event'> Home Team - Player 4 - Yellow Card - 18:32</div>
              <div className='event'> Away Team - Player 10 - Yellow Card - 16:43</div>
              <div className='event'> Home Team - Player 4 - Two Min - 14:12</div>
            </div>
          </div>
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
