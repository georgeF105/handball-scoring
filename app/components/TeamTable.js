import React from 'react'

class TeamTable extends React.Component {

  handlePlayerClick = (e) => {
    e.preventDefault()
    const playerKey = e.target.getAttribute('name')
    this.props.playerButton(this.props.team.key, playerKey)
  }

  sortPlayersObjIntoArr = (players) => {
    let playersArr = []
    Object.keys(players).map(key => {
      const player = players[key]
      player.key = key
      playersArr.push(player)
    })
    playersArr = playersArr.sort((a, b) => {
      const numA = parseInt(a.number)
      const numB = parseInt(b.number)
      if (numA < numB) return -1
      if (numA > numB) return 1
      return 0
    })
    return playersArr
  }

  render () {
    const players = this.sortPlayersObjIntoArr(this.props.team.players || {})
    const teamName = this.props.team.name || 'LOADING TEAM'
    return (
      <div className='team-table table card'>
        <div className='team-table row'>
          <div className='team-table title'>{teamName}</div>
        </div>
        <div className='team-table row heading'>
          <div className='team-table col num'>#</div>
          <div className='team-table col goal'>Goals</div>
          <div className='team-table col penalties yellow-card'>YC</div>
          <div className='team-table col penalties two-minute'>2M</div>
          <div className='team-table col penalties red-card'>RC</div>
        </div>
        {players.map((player, key) => {
          return (
            <div key={key} name={player.key} className='team-table row player' onClick={this.handlePlayerClick}>
              <div name={player.key} className='team-table col num'>{player.number}</div>
              <div name={player.key} className='team-table col goal'>{player.goals || 0}</div>
              <div name={player.key} className='team-table col penalties yellow-card'>{player.yellow_cards || 0}</div>
              <div name={player.key} className='team-table col penalties two-minute'>{player.two_minutes || 0}</div>
              <div name={player.key} className='team-table col penalties red-card'>{player.red_cards || 0}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default TeamTable
