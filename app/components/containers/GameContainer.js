import { connect } from 'react-redux'

import Game from '../Game'

const mapStateToProps = (state) => {
  return {
    games: state.games.get('games').toJS(),
    fetchingGames: state.games.get('fetchingGames')
  }
}

const GameContainer = connect(mapStateToProps)(Game)

export default GameContainer
