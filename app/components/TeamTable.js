import React from 'react'

class TeamTable extends React.Component {

  handlePlayerClick = (e) => {
    e.preventDefault()
    const playerKey = e.target.getAttribute('name')
    this.props.playerButton(this.props.team.key, playerKey)
  }

  render () {
    const players = this.props.team.players || {}
    const teamName = this.props.team.name || 'LOADING TEAM'
    return (
      <div className='team-table table card'>
        <div className='team-table row'>
          <div className='team-table title'>{teamName}</div>
        </div>
        <div className='team-table row heading'>
          <div className='team-table col num'>#</div>
          <div className='team-table col goal'>Goals</div>
          <div className='team-table col yellow-card'>Penalties</div>
        </div>
        {Object.keys(players).map((key) => {
          return (
            <div key={key} name={key} className='team-table row player' onClick={this.handlePlayerClick}>
              <div name={key} className='team-table col num'>{players[key].number}</div>
              <div name={key} className='team-table col goal'></div>
              <div name={key} className='team-table col yellow-card'></div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default TeamTable
