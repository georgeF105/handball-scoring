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
    // console.log('event button', e.target, 'running', this.props.games[this.props.params.id])
    if (this.props.games[this.props.params.id].status_in_play) {
      const eventName = e.target.name
      this.setState({pendingAction: eventName})
    }
  }

  handlePlayerButton = (teamKey, playerKey) => {
    const pendingAction = this.state.pendingAction
    const gameKey = this.props.params.id
    const game = this.props.games[gameKey]
    if (this.state.pendingAction) {
      const team = teamKey === game.home_team.key ? 'home' : 'away'
      const player = game[team + '_team'].players[playerKey]
      const eventObj = {}
      eventObj.type = pendingAction
      eventObj.team = team
      eventObj.player_key = playerKey
      eventObj.time = game.current_time
      this.props.addEvent(gameKey, eventObj)
      switch (pendingAction) {
        case EVENT_GOAL:
          this.props.setGameKeyValue(gameKey, team + '_team/players/' + playerKey + '/goals', (player.goals || 0) + 1)
          this.props.setGameKeyValue(gameKey, 'current_score/' + team, game.current_score[team] + 1)
          break
        case EVENT_7_METER:
          break
        case EVENT_YELLOW_CARD:
          this.props.setGameKeyValue(gameKey, team + '_team/players/' + playerKey + '/yellow_cards', (player.yellow_cards || 0) + 1)
          break
        case EVENT_2_MINUTE:
          this.props.setGameKeyValue(gameKey, team + '_team/players/' + playerKey + '/two_minutes', (player.two_minutes || 0) + 1)
          break
        case EVENT_RED_CARD:
          this.props.setGameKeyValue(gameKey, team + '_team/players/' + playerKey + '/red_cards', (player.red_cards || 0) + 1)
          break
        default:
          break

      }
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
