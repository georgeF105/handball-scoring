import React from 'react'

class NewTeam extends React.Component {

  addPlayerToTeam = (e) => {
    e.preventDefault()
    const playerKey = document.getElementById('existing-player-input').value
    const number = document.getElementById('number-existing-input').value
    this.props.addPlayerToTeam(this.props.params.id, playerKey, number)
  }

  addNewPlayerToTeam = (e) => {
    e.preventDefault()
    const number = document.getElementById('number-input').value
    let playerObj = {}
    playerObj.first_name = document.getElementById('first-name-input').value
    playerObj.last_name = document.getElementById('last-name-input').value
    playerObj.dob = document.getElementById('dob-input').value
    playerObj.mobile = document.getElementById('mobile-input').value
    playerObj.email = document.getElementById('email-input').value
    this.props.addNewPlayerToTeam(this.props.params.id, playerObj, number)
  }

  render () {
    const loggedIn = true// this.props.loggedIn
    const team = this.props.teams[this.props.params.id]
    console.log('team', team)
    const playersObj = this.props.players
    const players = []
    for (let key in playersObj) {
      let player = playersObj[key]
      player.playerKey = key
      players.push(player)
    }
    const teamPlayersObj = team ? team.players : null
    const teamPlayers = []
    for (let key in teamPlayersObj) {
      let teamPlayer = teamPlayersObj[key]
      teamPlayer.teamPlayerKey = key
      teamPlayers.push(teamPlayer)
    }
    console.log('teamPlayers', teamPlayers)
    return (
      <div className='container content new-team'>
        {loggedIn && team && players.length
          ? <form className='new-team-form'>
            <div className='row'>
              <div className='six columns'>
                {team ? <h3>{team.name}</h3> : <h3>Team Not Found</h3>}
              </div>
              <div className='two columns'>
                {team ? <h4>{team.gender}</h4> : null}
              </div>
            </div>
            {teamPlayers.map((player, key) => {
              return (
                <div key={key} className='row'>
                  <div className='two columns'>
                    <label>Number</label>
                    <p>{player.number}</p>
                  </div>
                  <div className='two columns'>
                    <label>First Name</label>
                    <p>{playersObj[player.key] ? playersObj[player.key].first_name : 'player not found'}</p>
                  </div>
                  <div className='two columns'>
                    <label>Last Name</label>
                    <p>{playersObj[player.key] ? playersObj[player.key].last_name : 'player not found'}</p>
                  </div>
                  <div className='two columns'>
                    <label>DOB</label>
                    <p>{playersObj[player.key] ? playersObj[player.key].dob : 'player not found'}</p>
                  </div>
                  <div className='two columns'>
                    <label>Mobile</label>
                    <p>{playersObj[player.key] ? playersObj[player.key].mobile : 'player not found'}</p>
                  </div>
                  <div className='two columns'>
                    <label>Email</label>
                  </div>
                </div>)
            })}
            <div className='row new-player'>
              <div className='one columns'>
                <label>Number</label>
                <input className='u-full-width' type='text' name='number' id='number-input' />
              </div>
              <div className='two columns'>
                <label>First Name</label>
                <input className='u-full-width' type='text' name='first-name' id='first-name-input' />
              </div>
              <div className='two columns'>
                <label>Last Name</label>
                <input className='u-full-width' type='text' name='last-name' id='last-name-input' />
              </div>
              <div className='two columns'>
                <label>DOB</label>
                <input className='u-full-width' type='date' name='dob' id='dob-input' />
              </div>
              <div className='two columns'>
                <label>Mobile</label>
                <input className='u-full-width' type='number' name='mobile' id='mobile-input' />
              </div>
              <div className='two columns'>
                <label>Email</label>
                <input className='u-full-width' type='email' name='email' id='email-input' />
              </div>
              <div className='one columns'>
                <label>Add</label>
                <input className='u-full-width' type='button' name='add-new-player' id='add-new-player-input' value='Add' onClick={this.addNewPlayerToTeam} />
              </div>
            </div>
            <div className='row'>
              <div className='two columns'>
                <label>Number</label>
                <input className='u-full-width' type='text' name='number' id='number-existing-input' />
              </div>
              <div className='seven columns'>
                <label>Choose Existing Player</label>
                <select className='u-full-width' type='text' name='existing-player' id='existing-player-input'>
                  <option value=''>Choose Player</option>
                  {players.map((player, key) => <option key={key} value={player.playerKey}>{player.first_name} {player.last_name}</option>)}
                </select>
              </div>
              <div className='three columns'>
                <label>align</label>
                <input className='u-full-width' type='button' name='number' value='Select Player' onClick={this.addPlayerToTeam} />
              </div>
            </div>
          </form>
          : <div className='message-box'>
            <h3>Log In To Make Game</h3>
          </div>}
      </div>
    )
  }
}

export default NewTeam
