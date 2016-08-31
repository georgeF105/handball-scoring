import React from 'react'

import Games from './Games'
import Teams from './Teams'
import Players from './Players'

import { removeGame } from '../../lib/gamesUtils'

class Dashboard extends React.Component {
  deleteGame = (e) => {
    e.preventDefault()
    removeGame(e.target.getAttribute('name'))
  }
  render () {
    const userId = this.props.userId
    const games = this.props.games || {}
    const teams = this.props.teams || {}
    const players = this.props.players || {}
    const fetching = this.props.fetchingGames || this.props.fetchingTeams || this.props.fetchingPlayers
    return (
      <div className='container content dashboard'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='page-header'>
              <h3>Games</h3>
            </div>
            {fetching ? <h3>Loading...</h3> : <Games userId={userId} games={games} teams={teams} deleteGame={this.deleteGame} isAdmin />}
          </div>
          <div className='col-md-4'>
            <div className='page-header'>
              <h3>Teams</h3>
            </div>
            {fetching ? <h3>Loading...</h3> : <Teams teams={teams} />}
          </div>
          <div className='col-md-4'>
            <div className='page-header'>
              <h3>Players</h3>
            </div>
            {fetching ? <h3>Loading...</h3> : <Players players={players} />}
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
