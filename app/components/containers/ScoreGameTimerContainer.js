import { connect } from 'react-redux'

import { fetchGame, initializeGame, setGameKeyValue, addEvent, startTimer, pauseTimer } from '../../redux/gamesActions'
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
    startTimer: (gameKey) => {
      dispatch(startTimer(gameKey))
    },
    pauseTimer: (gameKey, currentTime) => {
      dispatch(pauseTimer(gameKey, currentTime))
    }
  }
}

const ScoreGameTimerContainer = connect(mapStateToProps, mapDispatchToProps)(ScoreGameTimer)

export default ScoreGameTimerContainer
