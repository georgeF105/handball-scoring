import React from 'react'
import ReactTimeout from 'react-timeout'

import TeamTable from './TeamTable'
import EventsTable from './EventsTable'
import ScoreGameTimerContainer from './containers/ScoreGameTimerContainer'
import { formatScore } from '../../lib/formatNumber'
import { EVENT_GOAL, EVENT_7_METER, EVENT_YELLOW_CARD, EVENT_2_MINUTE, EVENT_RED_CARD } from '../../lib/gamesUtils'

class ScoreGame extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pendingAction: '',
      currentTime: this.props.games[this.props.params.id] && this.props.games[this.props.params.id].current_time || 0,
      running: this.props.games[this.props.params.id] && this.props.games[this.props.params.id].status_in_play || false,
      timeSet: false,
      halfTimeSeconds: 1200
    }
  }

  handlEventButton = (e) => {
    e.preventDefault()
    if (this.props.games[this.props.params.id].status_in_play) {
      const eventName = e.target.name
      this.setState({pendingAction: eventName})
    }
  }

  handlePlayerButton = (teamKey, playerGameKey) => {
    const pendingAction = this.state.pendingAction
    const gameKey = this.props.params.id
    const game = this.props.games[gameKey]
    const currentTime = game.current_time + Math.floor((Date.now() - game.timer_last_updated) / 1000)
    console.log('time', currentTime)
    if (this.state.pendingAction) {
      this.props.addEvent(game, teamKey, playerGameKey, pendingAction, currentTime)
      this.setState({pendingAction: ''})
    }
  }

  render () {
    const loading = this.props.fetchingGames
    const game = this.props.games[this.props.params.id] || {}
    const gameInitialized = game.status_initialized

    const homeTeam = gameInitialized ? game.home_team || {} : this.props.teams[game.home_team] || {}
    const awayTeam = gameInitialized ? game.away_team || {} : this.props.teams[game.away_team] || {}

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
          <TeamTable team={homeTeam} playerButton={this.handlePlayerButton} />
        </div>
        <div className='centre-column'>
          <ScoreGameTimerContainer game={game} gameKey={this.props.params.id} />
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
            <button className={'event-button goal ' + (pendingAction === EVENT_GOAL ? 'event-pending' : '')} name={EVENT_GOAL} onClick={this.handlEventButton}>Goal</button>
            <button className={'event-button seven-meter ' + (pendingAction === EVENT_7_METER ? 'event-pending' : '')} name={EVENT_7_METER} onClick={this.handlEventButton}>7 Meter</button>
            <button className={'event-button yellow-card ' + (pendingAction === EVENT_YELLOW_CARD ? 'event-pending' : '')} name={EVENT_YELLOW_CARD} onClick={this.handlEventButton}>YC</button>
            <button className={'event-button two-min ' + (pendingAction === EVENT_2_MINUTE ? 'event-pending' : '')} name={EVENT_2_MINUTE} onClick={this.handlEventButton}>2 Min</button>
            <button className={'event-button red-card ' + (pendingAction === EVENT_RED_CARD ? 'event-pending' : '')} name={EVENT_RED_CARD} onClick={this.handlEventButton}>RC</button>
          </div>
          <EventsTable events={events} />
        </div>
        <div className='team-table-column'>
          <div className='team-logo'>
            <img src='http://placehold.it/250x120?text=LOGO' />
          </div>
          <TeamTable team={awayTeam} playerButton={this.handlePlayerButton} />
        </div>
      </div>
    )
  }
}

export default ReactTimeout(ScoreGame)
