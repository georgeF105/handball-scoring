import React from 'react'
import ReactTimeout from 'react-timeout'

import TeamTable from './TeamTable'
import EventsTable from './EventsTable'
import { formatTime, formatScore } from '../../lib/formatNumber'
import { EVENT_GOAL, EVENT_7_METER, EVENT_YELLOW_CARD, EVENT_2_MINUTE, EVENT_RED_CARD } from '../../lib/gamesUtils'

class ScoreGame extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pendingAction: '',
      currentTime: this.props.games[this.props.params.id] && this.props.games[this.props.params.id].current_time || 0,
      running: this.props.games[this.props.params.id] && this.props.games[this.props.params.id].status_in_play || false,
      timeSet: false
    }
  }

  componentDidMount () {
    this.props.setInterval(this.tickTimer, 1000)
  }

  componentWillReceiveProps (nextProps) {
    const game = nextProps.games[this.props.params.id]
    this.setState({running: game && game.status_in_play})
    if (!this.state.timeSet && game) {
      let newCurrentTime = 0
      if (game.status_in_play) {
        newCurrentTime = game.current_time + Math.floor((Date.now() - game.timer_last_updated) / 1000)
      } else {
        newCurrentTime = game.current_time
      }
      this.setState({currentTime: newCurrentTime, timeSet: true})
    }
  }

  tickTimer = () => {
    const gameKey = this.props.params.id
    const game = this.props.games[gameKey] || {}
    const firstComp = game.status_firsthalf_completed || false
    const secondComp = game.status_secondhalf_completed || false
    let newCurrentTime = this.state.currentTime

    if (this.state.running) {
      newCurrentTime++
    }

    if (!firstComp && newCurrentTime > (20 * 60)) {
      newCurrentTime = 20 * 60
      this.props.setGameKeyValue(gameKey, 'status_firsthalf_completed', true)
      this.setState({running: false})
    }
    if (!secondComp && newCurrentTime > (40 * 60)) {
      newCurrentTime = 40 * 60
      this.props.setGameKeyValue(gameKey, 'status_secondhalf_completed', true)
      this.setState({running: false})
    }

    this.setState({currentTime: newCurrentTime})
  }

  handlEventButton = (e) => {
    e.preventDefault()
    if (this.state.running) {
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
      eventObj.time = this.state.currentTime
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

  startGame = (e) => {
    e.preventDefault()
    if (confirm('Initalize Game?')) {
      this.props.initializeGame(this.props.params.id)
    }
  }

  startTimer = (e) => {
    e.preventDefault()

    const gameKey = this.props.params.id
    const game = this.props.games[gameKey] || {}
    const firstStarted = game.status_firsthalf_started || false
    const firstComp = game.status_firsthalf_completed || false
    const secondStarted = game.status_secondhalf_started || false
    const secondComp = game.status_secondhalf_completed || false

    if (!firstStarted && !firstComp && !secondStarted && !secondComp) {
      this.props.setGameKeyValue(gameKey, 'status_firsthalf_started', true)
    }
    if (firstStarted && firstComp && !secondStarted && !secondComp) {
      this.props.setGameKeyValue(gameKey, 'status_secondhalf_started', true)
    }
    if (!secondComp) {
      this.props.startTimer(this.props.params.id)
      this.setState({running: true})
    }
  }

  pauseTimer = (e) => {
    e.preventDefault()
    this.setState({running: false})
    this.props.pauseTimer(this.props.params.id, this.state.currentTime)
  }

  render () {
    const loading = this.props.fetchingGames
    const game = this.props.games[this.props.params.id] || {}
    const gameInitialized = game.status_initialized

    const homeTeam = gameInitialized ? game.home_team || {} : this.props.teams[game.home_team] || {}
    const awayTeam = gameInitialized ? game.away_team || {} : this.props.teams[game.away_team] || {}

    const currentTime = formatTime(this.state.currentTime || 0)
    const homeTeamScore = formatScore(game.current_score && game.current_score.home || 0)
    const awayTeamScore = formatScore(game.current_score && game.current_score.away || 0)
    const events = game.events || []
    const pendingAction = this.state.pendingAction
    const running = this.state.running

    const initalized = game.status_initialized || false
    const firstStarted = game.status_firsthalf_started || false
    const firstComp = game.status_firsthalf_completed || false
    const secondStarted = game.status_secondhalf_started || false
    const secondComp = game.status_secondhalf_completed || false
    const gameStatus = firstStarted && firstComp && secondStarted && secondComp
      ? 'Full Time' : firstStarted && firstComp && secondStarted
      ? 'Second Half' : firstStarted && firstComp
      ? 'Start Second Half' : firstStarted && initalized
      ? 'First Half' : initalized
      ? 'Start Game' : 'Initalize Game'
    return (
      <div className='score-game'>
        <div className='team-table-column'>
          <div className='team-logo'>
            <img src='http://placehold.it/250x120?text=LOGO' />
          </div>
          <TeamTable team={homeTeam} playerButton={this.handlePlayerButton} />
        </div>
        <div className='centre-column'>
          <div className='game-timer'>
            {!loading
              ? <h1 className='timer' id='gameTimer'> {currentTime} </h1>
              : <h3>Loading Game</h3>}
            <h4>{gameStatus}</h4>
            {initalized
              ? !running
              ? <i className='fa fa-play game-timer-icon start' onClick={this.startTimer} />
              : <i className='fa fa-pause game-timer-icon pause' onClick={this.pauseTimer} />
              : <i className='fa fa-play-circle game-timer-icon initalize' onClick={this.startGame} />}
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
