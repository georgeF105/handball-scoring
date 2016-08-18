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
    this.state = { pendingAction: '', currentTime: 0, running: false}
  }

  handlEventButton = (e) => {
    e.preventDefault()
    const eventName = e.target.name
    this.setState({pendingAction: eventName})
  }

  handlePlayerButton = (teamKey, playerKey) => {
    console.log('Player Button teamKey', teamKey, 'playerKey', playerKey)
    const pendingAction = this.state.pendingAction

    if(this.state.pendingAction) {
      const team = teamKey === this.props.games[this.props.params.id].home_team.key ? 'home' : 'away'
      console.log('EVENT', pendingAction)
      switch (pendingAction) {
        case EVENT_GOAL:
          // A GOAL
          break
        case EVENT_7_METER:
          // A 7_METER
          break
        case EVENT_YELLOW_CARD:
          // A YELLOW_CARD
          break
        case EVENT_2_MINUTE:
          // A 2_MINUTE
          break
        case EVENT_RED_CARD:
          // A RED_CARD
          break
        default:
          break
        
      }
      this.setState({pendingAction: ''})
    }
  }

  startGame = () => {
    this.props.initializeGame(this.props.params.id)
  }

  startTimer = (e) => {
    e.preventDefault()
    console.log('start timer')
    if(!this.props.games[this.props.params.id].status_initialized) {
      console.log('inital game')
      this.startGame()
    }
  }

  pauseTimer = () => {
    this.setState({running: false})
    // send pause game to db
  }

  render () {
    const loading = this.props.fetchingGame
    const game = this.props.games[this.props.params.id] || {}
    console.log('venue',game.venue)
    // if (game.gameKey !== this.props.params.id && !loading) {
    //   this.props.fetchGame(this.props.params.id)
    // }
    const gameInitialized = game.status_initialized
    console.log('gameInitialized', gameInitialized)
    const homeTeam = gameInitialized ? game.home_team || {} : this.props.teams[game.home_team] || {}
    const awayTeam = gameInitialized ? game.away_team || {} : this.props.teams[game.away_team] || {}

    const homePlayers = homeTeam.players
    const awayPlayers = awayTeam.players
    console.log('players HERE', game)

    const currentTime = formatTime(game.current_time || 0)
    const homeTeamScore = formatScore(game.current_score && game.current_score.home || 0)
    const awayTeamScore = formatScore(game.current_score && game.current_score.away || 0)
    const events = game.events || []
    const pendingAction = this.state.pendingAction
    const running = game.status_in_play || false

    const firstStarted = game.status_firsthalf_started || false
    const firstComp = game.status_firsthalf_completed || false
    const secondStarted = game.status_secondhalf_started || false
    const secondComp = game.status_secondhalf_completed || false
    const gameStatus = firstStarted && firstComp && secondStarted && secondComp 
      ? 'Full Time' : firstStarted && firstComp && secondStarted
      ? 'Second Half' : firstStarted && firstComp
      ? 'Start Second Half' : firstStarted 
      ? 'First Half' : 'Start Game'
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
            {!running ? <i className='fa fa-play game-timer-icon start' onClick={this.startTimer} /> : <i className='fa fa-pause game-timer-icon pause' />}
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
