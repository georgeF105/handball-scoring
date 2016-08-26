import { connect } from 'react-redux'

import EditTeam from '../EditTeam'

const mapStateToProps = (state) => {
  return {
    userId: state.user.get('userId'),
    loggedIn: state.user.get('loggedIn'),
    players: state.players.get('players').toJS(),
    teams: state.teams.get('teams').toJS()
  }
}

const EditTeamContainer = connect(mapStateToProps)(EditTeam)

export default EditTeamContainer
