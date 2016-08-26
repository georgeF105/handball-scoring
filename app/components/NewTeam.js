import React from 'react'
import { hashHistory } from 'react-router'

import { saveTeam } from '../../lib/teamsUtils'

class NewTeam extends React.Component {

  submitTeam = (e) => {
    e.preventDefault()
    let teamObj = {}
    teamObj.name = document.getElementById('team-name-input').value
    teamObj.gender = document.getElementById('gender-input').value
    const teamKey = saveTeam(teamObj)
    hashHistory.push('/team/' + teamKey + '/edit')
  }

  render () {
    const loggedIn = true// this.props.loggedIn
    return (
      <div className='container content new-team'>
        {loggedIn
          ? <form className='new-team-form'>
            <div className='row'>
              <div className='six columns'>
                <label>Team Name</label><input className='u-full-width' type='text' name='team-name' id='team-name-input' onBlur={this.setTeamName} />
              </div>
              <div className='three columns'>
                <label htmlFor='gender-input' >Gender</label>
                <select type='text' name='gender' id='gender-input' >
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </select>
              </div>
              <div className='three columns' />
            </div>
            <div className='row'>
              <button onClick={this.submitTeam} >Make Team</button>
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
