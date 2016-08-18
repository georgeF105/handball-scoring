import { connect } from 'react-redux'

import { fetchGame, initializeGame, setGameKeyValue, addEvent, startTimer, pauseTimer } from '../../redux/gamesActions'
import ScoreGame from '../ScoreGame'

const mapStateToProps = (state) => {
  return {
    game: state.games.get('game').toJS(),
    games: state.games.get('games').toJS(),
    teams: state.teams.get('teams').toJS(),
    fetchingGame: state.games.get('fetchingGame')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGame: (gameKey) => {
      dispatch(fetchGame(gameKey))
    },
    initializeGame: (gameKey) => {
      dispatch(initializeGame(gameKey))
    },
    setGameKeyValue: (gameKey, key, value) => {
      dispatch(setGameKeyValue(gameKey, key, value))
    },
    addEvent: (gameKey, eventObj) => {
      dispatch(addEvent(gameKey, eventObj))
    },
    startTimer: (gameKey) => {
      dispatch(startTimer(gameKey))
    },
    pauseTimer: (gameKey, currentTime) => {
      dispatch(pauseTimer(gameKey, currentTime))
    }
  }
}

const ScoreGameContainer = connect(mapStateToProps, mapDispatchToProps)(ScoreGame)

export default ScoreGameContainer
