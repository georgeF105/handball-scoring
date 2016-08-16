import { connect } from 'react-redux'

import { submitGame } from '../../redux/gamesActions'
import Games from '../Games'

const mapStateToProps = (state) => {
  return {
    userId: state.user.get('userId'),
    loggedIn: state.user.get('loggedIn'),
    games: state.games.get('games').toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitGame: () => {
      dispatch(fetchGames())
    }
  }
}

const GamesContainer = connect(mapStateToProps, mapDispatchToProps)(Games)

export default GamesContainer
