import { connect } from 'react-redux'

import TeamTable from '../TeamTable'

const mapStateToProps = (state) => {
  return {
    players: state.players.get('players').toJS(),
    fetchingGame: state.players.get('fetchingPlayers')

  }
}

const TeamTableContainer = connect(mapStateToProps)(TeamTable)

export default TeamTableContainer
