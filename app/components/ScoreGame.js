import React from 'react'

import TeamTable from './TeamTable'
import EventsTable from './EventsTable'
import { formatTime, formatScore } from '../../lib/formatNumber'
import { EVENT_GOAL, EVENT_7_METER, EVENT_YELLOW_CARD, EVENT_2_MINUTE, EVENT_RED_CARD } from '../../lib/gamesUtils'

name={EVENT_GOAL}
name={EVENT_7_METER}
name={EVENT_YELLOW_CARD}
name={EVENT_2_MINUTE}
name={EVENT_RED_CARD}

class ScoreGame extends React.Component {
  constructor (props) {
    super(props)
    this.state = { pendingAction: ''}
  }

  handlEventButton = (e) => {
    e.preventDefault()
    const eventName = e.target.name
    this.setState({pendingAction: eventName})
  }

  handlePlayerButton = (teamKey, playerKey) => {
    console.log('Player Button teamKey', teamKey, 'playerKey', playerKey)
    if(this.state.pendingAction) {
      console.log('EVENT', this.state.pendingAction)
      this.setState({pendingAction: ''})
    }
  }

  render () {
    const loading = this.props.fetchingGame
    const game = this.props.game
    if (game.gameKey !== this.props.params.id && !loading) {
      this.props.fetchGame(this.props.params.id)
    }
    const homeTeam = game.home_team || {}
    const awayTeam = game.away_team || {}
    const homePlayers = game.home_team && game.home_team.players || []
    const awayPlayers = game.home_team && game.away_team.players || []
    const currentTime = formatTime(game.current_time || 0)
    const homeTeamScore = formatScore(game.current_score && game.current_score.home || 0)
    const awayTeamScore = formatScore(game.current_score && game.current_score.away || 0)
    const events = game.events || []
    const pendingAction = this.state.pendingAction
    return (
      <div className='score-game'>
        <div className='team-table-column'>
          <div className='team-logo'>
            <img src='http://placehold.it/250x120?text=LOGO' />
          </div>
          <TeamTable teamName='home team' players={homePlayers} team={homeTeam} playerButton={this.handlePlayerButton} />
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
            <button className={'event-button goal ' + (pendingAction === EVENT_GOAL ? 'event-pending': '')} name={EVENT_GOAL} onClick={this.handlEventButton}>Goal</button>
            <button className={'event-button seven-meter ' + (pendingAction === EVENT_7_METER ? 'event-pending': '')} name={EVENT_7_METER} onClick={this.handlEventButton}>7 Meter</button>
            <button className={'event-button yellow-card ' + (pendingAction === EVENT_YELLOW_CARD ? 'event-pending': '')} name={EVENT_YELLOW_CARD} onClick={this.handlEventButton}>YC</button>
            <button className={'event-button two-min ' + (pendingAction === EVENT_2_MINUTE ? 'event-pending': '')} name={EVENT_2_MINUTE} onClick={this.handlEventButton}>2 Min</button>
            <button className={'event-button red-card ' + (pendingAction === EVENT_RED_CARD ? 'event-pending': '')} name={EVENT_RED_CARD} onClick={this.handlEventButton}>RC</button>
          </div>
          <EventsTable events={events} />
        </div>
        <div className='team-table-column'>
          <div className='team-logo'>
            <img src='http://placehold.it/250x120?text=LOGO' />
          </div>
          <TeamTable teamName={'away team'} players={awayPlayers}  team={awayTeam} playerButton={this.handlePlayerButton} />
        </div>
      </div>
    )
  }
}

export default ScoreGame
