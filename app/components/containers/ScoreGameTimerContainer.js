import { connect } from 'react-redux'

import { initializeGame, setGameKeyValue, startTimer, pauseTimer, updateTime } from '../../redux/gamesActions'
import ScoreGameTimer from '../ScoreGameTimer'

const mapStateToProps = (state) => {
  return {
    fetchingGame: state.games.get('fetchingGames')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initializeGame: (gameKey) => {
      dispatch(initializeGame(gameKey))
    },
    setGameKeyValue: (gameKey, key, value) => {
      dispatch(setGameKeyValue(gameKey, key, value))
    },
    startTimer: (gameKey, currentTime) => {
      dispatch(startTimer(gameKey, currentTime))
    },
    pauseTimer: (gameKey, currentTime) => {
      dispatch(pauseTimer(gameKey, currentTime))
    },
    updateTime: (gameKey, currentTime) => {
      dispatch(updateTime(gameKey, currentTime))
    }
  }
}

const ScoreGameTimerContainer = connect(mapStateToProps, mapDispatchToProps)(ScoreGameTimer)

export default ScoreGameTimerContainer
