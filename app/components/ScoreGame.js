import React from 'react'
import TeamTable from './TeamTable'

class ScoreGame extends React.Component {

  render () {
    const game = this.props.games[this.props.params.id]
    const players = [
      {num:1},{num:2},{num:3},{num:4},{num:5},{num:6},{num:7},{num:8},
      {num:9},{num:10},{num:11},{num:12},{num:13},{num:14},{num:15},{num:16}
    ]
    return (
      <div className='score-game'>
        <div className='team-table-column'>
          <div className='team-logo'>
            <img src="http://placehold.it/250x120?text=LOGO" />
          </div>
          <TeamTable teamName='home team' players={players}/>
        </div>
        <div className='centre-column'>
          <div className='game-timer'>
            <h3 className='timer' id='gameTimer'> 00:00 </h3>
            <div>Play/Pause(icon)</div>
          </div>
          <div className='scores-board'>
           <div className='score-board'>
            <h3 className='game-score' id='homeTeamScore'>00</h3>
            <div>home</div>
           </div>
           <div className='score-board'>
            <h3 className='game-score' id='awayTeamScore'>00</h3>
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
          <TeamTable teamName={'away team'} players={players}/>
        </div>
      </div>
    )
  }
}

export default ScoreGame
