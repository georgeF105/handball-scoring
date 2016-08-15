import { connect } from 'react-redux'

import { submitGame } from '../../actions'
import NewGame from '../NewGame'

const mapStateToProps = (state) => {
  return {
    
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
