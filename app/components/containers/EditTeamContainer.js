import { connect } from 'react-redux'

import { addPlayerToTeam, addNewPlayerToTeam } from '../../redux/teamsActions'
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
    addPlayerToTeam: (teamKey, playerKey, number) => {
      dispatch(addPlayerToTeam(teamKey, playerKey, number))
    },
    addNewPlayerToTeam: (teamKey, playerObj, number) => {
      dispatch(addNewPlayerToTeam(teamKey, playerObj, number))
    }
  }
}

const EditTeamContainer = connect(mapStateToProps, mapDispatchToProps)(EditTeam)

export default EditTeamContainer
