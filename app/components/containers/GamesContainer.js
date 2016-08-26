import { connect } from 'react-redux'

import Games from '../Games'

const mapStateToProps = (state) => {
  return {
    userId: state.user.get('userId'),
    loggedIn: state.user.get('loggedIn'),
    games: state.games.get('games').toJS(),
    fetchingGames: state.games.get('fetchingGames')
  }
}

const GamesContainer = connect(mapStateToProps)(Games)

export default GamesContainer
