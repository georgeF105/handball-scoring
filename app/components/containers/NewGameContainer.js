import { connect } from 'react-redux'

import NewGame from '../NewGame'

const mapStateToProps = (state) => {
  return {
    userId: state.user.get('userId'),
    loggedIn: state.user.get('loggedIn'),
    teams: state.teams.get('teams').toJS()
  }
}

const NewGameContainer = connect(mapStateToProps)(NewGame)

export default NewGameContainer
