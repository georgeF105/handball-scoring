import { connect } from 'react-redux'

import { submitPlayer } from '../../redux/playersActions'
import EditTeam from '../EditTeam'

const mapStateToProps = (state) => {
  return {
    userId: state.user.get('userId'),
    loggedIn: state.user.get('loggedIn'),
    players: state.players.get('players').toJS(),
    teams: state.teams.get('teams').toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitPlayer: (teamObj) => {
      dispatch(submitTeam(teamObj))
    }
  }
}

const EditTeamContainer = connect(mapStateToProps, mapDispatchToProps)(EditTeam)

export default EditTeamContainer
