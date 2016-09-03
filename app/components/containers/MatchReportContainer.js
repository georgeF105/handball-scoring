import { connect } from 'react-redux'

import MatchReport from '../MatchReport'

const mapStateToProps = (state) => {
  return {
    games: state.games.get('games').toJS(),
    teams: state.teams.get('teams').toJS(),
    fetchingGame: state.games.get('fetchingGames')
  }
}

const MatchReportContainer = connect(mapStateToProps)(MatchReport)

export default MatchReportContainer
