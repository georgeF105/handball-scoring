import { connect } from 'react-redux'

import ScoreGame from '../ScoreGame'

const mapStateToProps = (state) => {
  return {
    games: state.games.get('games').toJS(),
    teams: state.teams.get('teams').toJS(),
    fetchingGame: state.games.get('fetchingGames')
  }
}

const ScoreGameContainer = connect(mapStateToProps)(ScoreGame)

export default ScoreGameContainer
