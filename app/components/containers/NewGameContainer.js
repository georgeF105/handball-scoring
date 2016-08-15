import { connect } from 'react-redux'

import { makeGame } from '../../actions'
import NewGame from '../NewGame'

const mapStateToProps = (state) => {
  return {
    user: state.get('user').toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    makeGame: (gameObj) => {
      dispatch(makeGame(gameObj))
    }
  }
}

const NewGameContainer = connect(mapStateToProps, mapDispatchToProps)(NewGame)

export default NewGameContainer
