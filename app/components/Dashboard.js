import React from 'react'

import Games from './Games'
import Teams from './Teams'

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
    const fetching = this.props.fetchingGames || this.props.fetchingTeams
    return (
      <div className='container content dashboard'>
        <div className='page-header'>
          <h1>Dashboard</h1>
          <div className='row'>
            <div className='col-md-4'>
              <h3>Games</h3>
            </div>
            <div className='col-md-4'>
              <h3>Teams</h3>
            </div>
            <div className='col-md-4'>
              <h3>Players</h3>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            {fetching ? <h3>Loading...</h3> : <Games userId={userId} games={games} teams={teams} deleteGame={this.deleteGame} />}
          </div>
          <div className='col-md-4'>
            {fetching ? <h3>Loading...</h3> : <Teams teams={teams} />}
          </div>
          <div className='col-md-4'>
            {fetching ? <h3>Loading...</h3> : <Teams teams={teams} />}
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
