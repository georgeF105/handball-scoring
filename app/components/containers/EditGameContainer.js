import { connect } from 'react-redux'

import EditGame from '../EditGame'

const mapStateToProps = (state) => {
  return {
    games: state.games.get('games').toJS(),
    fetchingGames: state.games.get('fetchingGames')
  }
}

const EditGameContainer = connect(mapStateToProps)(EditGame)

export default EditGameContainer
