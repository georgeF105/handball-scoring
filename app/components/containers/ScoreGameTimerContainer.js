import { connect } from 'react-redux'

import ScoreGameTimer from '../ScoreGameTimer'

const mapStateToProps = (state) => {
  return {
    fetchingGame: state.games.get('fetchingGames')
  }
}

const ScoreGameTimerContainer = connect(mapStateToProps)(ScoreGameTimer)

export default ScoreGameTimerContainer
