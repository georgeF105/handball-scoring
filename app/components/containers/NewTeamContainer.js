import { connect } from 'react-redux'

import NewTeam from '../NewTeam'

const mapStateToProps = (state) => {
  return {
    userId: state.user.get('userId'),
    loggedIn: state.user.get('loggedIn'),
    players: state.players.get('players').toJS()
  }
}

const NewTeamContainer = connect(mapStateToProps)(NewTeam)

export default NewTeamContainer
