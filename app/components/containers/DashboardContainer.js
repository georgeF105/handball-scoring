import { connect } from 'react-redux'

import Dashboard from '../Dashboard'
import { deleteGame } from '../../redux/gamesActions'

const mapStateToProps = (state) => {
  return {
    userId: state.user.get('userId'),
    loggedIn: state.user.get('loggedIn'),
    games: state.games.get('games') && state.games.get('games').toJS() || {},
    fetchingGames: state.games.get('fetchingGames'),
    teams: state.teams.get('teams') && state.teams.get('teams').toJS() || {},
    fetchingTeams: state.teams.get('fetchingTeams')
  }
}

const DashboardContainer = connect(mapStateToProps)(Dashboard)

export default DashboardContainer
