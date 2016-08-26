import React from 'react'

class TeamTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      displayNames: true
    }
  }
  handlePlayerClick = (e) => {
    e.preventDefault()
    const playerKey = e.target.getAttribute('name')
    this.props.playerButton(this.props.team.key, playerKey)
  }

  sortPlayersObjIntoArr = (players) => {
    let playersArr = []
    console.log('players', players)
    Object.keys(players).map(key => {
      const player = Object.assign({}, players[key])
      player.teamKey = key
      player.firstName = this.props.players[players[key].key] && this.props.players[players[key].key].first_name || ''
      player.lastName = this.props.players[players[key].key] && this.props.players[players[key].key].last_name || ''
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

  toggleDisplay = () => {
    this.setState({displayNames: !this.state.displayNames})
  }

  render () {
    const loading = this.props.fetchingPlayers
    const players = !loading ? this.sortPlayersObjIntoArr(this.props.team.players || {}) : []
    const teamName = this.props.team.name || 'LOADING TEAM'
    return (
      <div className='team-table table card'>
        <div className='team-table row'>
          <div className='team-table title'>{teamName}</div>
        </div>
        {this.state.displayNames
          ? <div className='team-table row heading'>
            <div className='team-table col num'>#</div>
            <div className='team-table col name'>Name</div>
          </div>
          :<div className='team-table row heading'>
            <div className='team-table col num'>#</div>
            <div className='team-table col goal'>Goals</div>
            <div className='team-table col penalties yellow-card'>YC</div>
            <div className='team-table col penalties two-minute'>2M</div>
            <div className='team-table col penalties red-card'>RC</div>
          </div>}
        <div className='table-content players'>
        {players.map((player, key) => {
          return ( this.state.displayNames
            ? <div key={key} name={player.teamKey} className='team-table row player' onClick={this.handlePlayerClick}>
              <div name={player.teamKey} className='team-table col num'>{player.number}</div>
              <div name={player.teamKey} className='team-table col name'>{player.firstName + ' ' + player.lastName}</div>
            </div>
            : <div key={key} name={player.teamKey} className='team-table row player' onClick={this.handlePlayerClick}>
              <div name={player.teamKey} className='team-table col num'>{player.number}</div>
              <div name={player.teamKey} className='team-table col goal'>{player.goals || 0}</div>
              <div name={player.teamKey} className='team-table col penalties yellow-card'>{player.yellow_cards || 0}</div>
              <div name={player.teamKey} className='team-table col penalties two-minute'>{player.two_minutes || 0}</div>
              <div name={player.teamKey} className='team-table col penalties red-card'>{player.red_cards || 0}</div>
            </div>
          )
        })}
        </div>
        {this.state.displayNames 
          ? <div className='team-table row selector' onClick={this.toggleDisplay}>
            <div className='content-selector active'>Names</div>
            <div className='content-selector'>Stats</div>
          </div>
          : <div className='team-table row selector' onClick={this.toggleDisplay}>
            <div className='content-selector'>Names</div>
            <div className='content-selector active'>Stats</div>
          </div>}
      </div>
    )
  }
}

export default TeamTable
