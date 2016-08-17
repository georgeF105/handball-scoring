import { connect } from 'react-redux'

import { submitTeam } from '../../redux/teamsActions'
import NewTeam from '../NewTeam'

const mapStateToProps = (state) => {
  return {
    userId: state.user.get('userId'),
    loggedIn: state.user.get('loggedIn'),
    players: state.players.get('players').toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitTeam: (teamObj) => {
      dispatch(submitTeam(teamObj))
    }
  }
}

const NewTeamContainer = connect(mapStateToProps, mapDispatchToProps)(NewTeam)

export default NewTeamContainer
