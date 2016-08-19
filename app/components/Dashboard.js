import React from 'react'

import Games from './Games'
import Teams from './Teams'

class Dashboard extends React.Component {
  deleteGame = (e) => {
    e.preventDefault()
    this.props.deleteGame(e.target.getAttribute('name'))
  }
  render() {
    const userId = this.props.userId
    const games = this.props.games || {}
    const teams = this.props.teams || {}
    const fetching = this.props.fetchingGames || this.props.fetchingTeams
    return (
      <div className='container content dashboard'>
        <h1>Dashboard</h1>
        <div className='row'>
          <div className='six columns'>
            {fetching ? <h3>Loading...</h3> :<Games userId={userId} games={games} teams={teams} deleteGame={this.deleteGame} />}
          </div>
          <div className='six columns'>
            {fetching ? <h3>Loading...</h3> : <Teams teams={teams} />}
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
