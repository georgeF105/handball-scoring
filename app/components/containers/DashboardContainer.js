import { connect } from 'react-redux'

import Dashboard from '../Dashboard'

const mapStateToProps = (state) => {
  return {
    userId: state.user.get('userId'),
    loggedIn: state.user.get('loggedIn'),
    games: state.games.get('games').toJS(),
    fetchingGames: state.games.get('fetchingGames'),
    teams: state.teams.get('teams').toJS(),
    fetchingTeams: state.teams.get('fetchingTeams')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard)

export default DashboardContainer
