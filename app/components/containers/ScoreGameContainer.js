import { connect } from 'react-redux'

import { fetchGame } from '../../redux/gamesActions'
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
    }
  }
}

const ScoreGameContainer = connect(mapStateToProps, mapDispatchToProps)(ScoreGame)

export default ScoreGameContainer
