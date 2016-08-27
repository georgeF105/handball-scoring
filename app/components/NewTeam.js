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
            <div className='row form-group'>
              <div className='col-md-6'>
                <label htmlFor='team-name-input'>Team Name</label><input className='form-control' type='text' name='team-name' id='team-name-input' onBlur={this.setTeamName} />
              </div>
              <div className='col-md-3'>
                <label htmlFor='gender-input' >Gender</label>
                <select className='form-control' type='text' name='gender' id='gender-input' >
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </select>
              </div>
              <div className='col-md-3' />
            </div>
            <button className='btn btn-default' onClick={this.submitTeam} >Make Team</button>
          </form>
          : <div className='message-box'>
            <h3>Log In To Make Game</h3>
          </div>}
      </div>
    )
  }
}

export default NewTeam
