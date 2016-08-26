import React from 'react'
import ReactTimeout from 'react-timeout'

import { formatTime } from '../../lib/formatNumber'
import { startFirstHalf, startSecondHalf, completeFirstHalf, completeSecondHalf, startGameTimer, pauseGameTimer, updateGameTime, initializeGame } from '../../lib/gamesUtils.js'

class ScoreGameTimer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentTime: this.props.game && this.props.game.current_time || 0,
      running: this.props.game && this.props.game.status_in_play || false,
      timeSet: false,
      halfTimeSeconds: 1200,
      adjustClockSettings: false
    }
  }

  componentDidMount () {
    this.props.setInterval(this.tickTimer, 10)
  }

  componentWillReceiveProps (nextProps) {
    const game = nextProps.game
    this.setState({running: game && game.status_in_play})
    if (!this.state.timeSet && game && game.current_time) {
      this.setState({running: game.status_in_play})
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
    const gameKey = this.props.gameKey
    const game = this.props.game || {}
    const firstComp = game.status_firsthalf_completed || false
    const secondComp = game.status_secondhalf_completed || false
    const halfTimeSeconds = this.state.halfTimeSeconds
    let newCurrentTime = this.state.currentTime
    if (this.state.running) {
      newCurrentTime++
    }

    if (!firstComp && newCurrentTime > halfTimeSeconds) {
      newCurrentTime = halfTimeSeconds
      completeFirstHalf(gameKey)
      this.setState({running: false})
      pauseGameTimer(this.props.gameKey, this.state.currentTime)
    }
    if (!secondComp && newCurrentTime > (halfTimeSeconds * 2)) {
      newCurrentTime = halfTimeSeconds * 2
      completeSecondHalf(gameKey)
      this.setState({running: false})
      pauseGameTimer(this.props.gameKey, this.state.currentTime)
    }

    this.setState({currentTime: newCurrentTime})
  }

  startGame = (e) => {
    e.preventDefault()
    if (confirm('Initalize Game?')) {
      initializeGame(this.props.gameKey, this.props.game, this.props.homeTeam, this.props.awayTeam)
    }
  }

  startTimer = (e) => {
    e.preventDefault()

    const gameKey = this.props.gameKey
    const game = this.props.game || {}
    const firstStarted = game.status_firsthalf_started || false
    const firstComp = game.status_firsthalf_completed || false
    const secondStarted = game.status_secondhalf_started || false
    const secondComp = game.status_secondhalf_completed || false

    if (!firstStarted && !firstComp && !secondStarted && !secondComp) {
      startFirstHalf(gameKey)
    }
    if (firstStarted && firstComp && !secondStarted && !secondComp) {
      startSecondHalf(gameKey)
    }
    if (!secondComp) {
      startGameTimer(this.props.gameKey, this.state.currentTime)
      this.setState({running: true})
    }
  }

  pauseTimer = (e) => {
    e.preventDefault()
    pauseGameTimer(this.props.gameKey, this.state.currentTime)
    this.setState({running: false})
  }

  toggleAdjustClockSettings = (e) => {
    e.preventDefault()
    this.setState({adjustClockSettings: !this.state.adjustClockSettings})
  }

  adjustTimeUp = () => {
    updateGameTime(this.props.gameKey, this.state.currentTime + 5)
    this.setState({currentTime: this.state.currentTime + 5})
  }

  adjustTimeDown = () => {
    updateGameTime(this.props.gameKey, this.state.currentTime - 5)
    this.setState({currentTime: this.state.currentTime - 5})
  }

  render () {
    const loading = this.props.fetchingGames
    const game = this.props.game || {}

    const currentTime = formatTime(this.state.currentTime || 0)
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
    const adjustClockSettings = this.state.adjustClockSettings
    return (
      <div className='game-timer'>
        {!loading
          ? <div className='timer' id='gameTimer' onClick={this.toggleAdjustClockSettings}> {currentTime} </div>
          : <h3>Loading Game</h3>}
        {adjustClockSettings
          ? <div className='adjust-clock'>
            <i className='fa fa-plus' onClick={this.adjustTimeUp} />
            <i className='fa fa-minus' onClick={this.adjustTimeDown} />
          </div>
          : <div className='game-status'>{gameStatus}</div>}
        {initalized
          ? !running
          ? <i className='fa fa-play game-timer-icon start' onClick={this.startTimer} />
          : <i className='fa fa-pause game-timer-icon pause' onClick={this.pauseTimer} />
          : <i className='fa fa-play-circle game-timer-icon initalize' onClick={this.startGame} />}
      </div>
    )
  }
}

export default ReactTimeout(ScoreGameTimer)
