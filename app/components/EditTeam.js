import React from 'react'

import { addTeamPlayer, addNewTeamPlayer } from '../../lib/teamsUtils'

class NewTeam extends React.Component {

  addPlayerToTeam = (e) => {
    e.preventDefault()
    const playerKey = document.getElementById('existing-player-input').value
    const number = document.getElementById('number-existing-input').value
    addTeamPlayer(this.props.params.id, playerKey, number)
  }

  addNewPlayerToTeam = (e) => {
    e.preventDefault()
    let playerObj = {}
    const number = document.getElementById('number-input').value
    playerObj.first_name = document.getElementById('first-name-input').value
    playerObj.last_name = document.getElementById('last-name-input').value
    playerObj.dob = document.getElementById('dob-input').value
    playerObj.mobile = document.getElementById('mobile-input').value
    playerObj.email = document.getElementById('email-input').value
    addNewTeamPlayer(this.props.params.id, playerObj, number)
    document.getElementById('number-input').value = ''
    document.getElementById('first-name-input').value = ''
    document.getElementById('last-name-input').value = ''
    document.getElementById('dob-input').value = ''
    document.getElementById('mobile-input').value = ''
    document.getElementById('email-input').value = ''
  }

  render () {
    const team = this.props.teams[this.props.params.id] || {}
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
        <div className='row page-header'>
          <div className='col-md-9'>
            <h3>{team.name}</h3>
            <h4>{team.gender}</h4>
          </div>
          <div className='col-md-3'>
            <img src='http://placehold.it/250x120?text=LOGO' />
          </div>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th className='number'>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>DOB</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>playing</th>
            </tr>
          </thead>
          <tbody>
            {teamPlayers.map((player, key) => {
              return (
                <tr key={key}>
                  <td className='number'>{player.number}</td>
                  <td>{playersObj[player.key] ? playersObj[player.key].first_name : 'player not found'}</td>
                  <td>{playersObj[player.key] ? playersObj[player.key].last_name : 'player not found'}</td>
                  <td>{playersObj[player.key] ? playersObj[player.key].dob : 'player not found'}</td>
                  <td>{playersObj[player.key] ? playersObj[player.key].mobile : 'player not found'}</td>
                  <td>{playersObj[player.key] ? playersObj[player.key].email : 'player not found'}</td>
                  <td><i className='fa fa-check' /></td>
                </tr>)
            })}
            <tr className='player-input'>
              <td><input placeholder='#' className='number' type='number' id='number-input' /></td>
              <td><input placeholder='first name' className='first-name' type='text' id='first-name-input' /></td>
              <td><input placeholder='second name' className='second-name' type='text' id='last-name-input' /></td>
              <td><input className='dob' type='date' id='dob-input' /></td>
              <td><input placeholder='mobile' className='mobile' type='number' id='mobile-input' /></td>
              <td><input placeholder='email' className='email' type='email' id='email-input' /></td>
              <td><button className='btn btn-default' onClick={this.addNewPlayerToTeam}>Add</button></td>
            </tr>
          </tbody>
        </table>
        <form className='new-team-form'>
          <div className='row'>
            <div className='col-md-1'>
              <input className='form-control' type='text' placeholder='#' name='number' id='number-existing-input' />
            </div>
            <div className='col-md-8'>
              <select className='form-control' type='text' name='existing-player' id='existing-player-input'>
                <option value=''>Choose Player</option>
                {players.map((player, key) => <option key={key} value={player.playerKey}>{player.first_name} {player.last_name} {player.dob}</option>)}
              </select>
            </div>
            <div className='col-md-3'>
              <input className='form-control' type='button' name='number' value='Select Player' onClick={this.addPlayerToTeam} />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default NewTeam
