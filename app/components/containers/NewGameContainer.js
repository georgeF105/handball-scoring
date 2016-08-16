import { connect } from 'react-redux'

import { submitGame } from '../../redux/gamesActions'
import NewGame from '../NewGame'

const mapStateToProps = (state) => {
  return {
    userId: state.user.get('userId'),
    loggedIn: state.user.get('loggedIn')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitGame: (gameObj) => {
      dispatch(submitGame(gameObj))
    }
  }
}

const NewGameContainer = connect(mapStateToProps, mapDispatchToProps)(NewGame)

export default NewGameContainer
