import { connect } from 'react-redux'

import Dashboard from '../Dashboard'

const mapStateToProps = (state) => {
  return {
    userId: state.user.get('userId'),
    loggedIn: state.user.get('loggedIn'),
    games: state.games.get('games') && state.games.get('games').toJS() || {},
    fetchingGames: state.games.get('fetchingGames'),
    teams: state.teams.get('teams') && state.teams.get('teams').toJS() || {},
    fetchingTeams: state.teams.get('fetchingTeams'),
    players: state.players.get('players') && state.players.get('players').toJS() || {},
    fetchingPlayers: state.players.get('fetchingPlayers')
  }
}

const DashboardContainer = connect(mapStateToProps)(Dashboard)

export default DashboardContainer
