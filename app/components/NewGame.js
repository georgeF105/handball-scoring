import React from 'react'
import { hashHistory } from 'react-router'

import { saveGame } from '../../lib/gamesUtils'

class NewGame extends React.Component {

  submitGame = (e) => {
    e.preventDefault()
    console.log('Make New Game', e)
    let gameObj = {}
    gameObj.venue = document.getElementById('venue-input').value
    gameObj.date = document.getElementById('date-input').value
    gameObj.time = document.getElementById('time-input').value
    gameObj.gender = document.getElementById('gender-input').value
    gameObj.home_team_key = document.getElementById('home_team-input').value
    gameObj.away_team_key = document.getElementById('away_team-input').value
    gameObj.referee_1 = document.getElementById('referee_1-input').value
    gameObj.referee_2 = document.getElementById('referee_2-input').value
    gameObj.timekeeper = document.getElementById('timekeeper-input').value
    gameObj.scorekeeper = document.getElementById('scorekeeper-input').value
    gameObj.owner_id = this.props.userId
    gameObj.home_players = []
    gameObj.away_players = []
    gameObj.events = []
    gameObj.current_score = {home: 0, away: 0}
    gameObj.halftime_score = {home: 0, away: 0}
    gameObj.fulltime_score = {home: 0, away: 0}
    gameObj.status_initialized = false
    gameObj.status_in_play = false
    gameObj.status_firsthalf_started = false
    gameObj.status_firsthalf_completed = false
    gameObj.status_secondhalf_started = false
    gameObj.status_secondhalf_completed = false
    gameObj.current_time = 0

    saveGame(gameObj)
    hashHistory.push('/')
  }

  render () {
    const teams = []
    for (let key in this.props.teams) {
      let team = this.props.teams[key]
      team.teamKey = key
      teams.push(team)
    }
    return (
      <div className='container content new-game'>
        <form className='new-game-form'>
          <div className='row form-group'>
            <div className='col-md-6'>
              <label htmlFor='venue-input'>Venue</label><input className='form-control' type='text' name='venue' id='venue-input' />
            </div>
            <div className='col-md-2'>
              <label htmlFor='date-input'>Date</label><input className='form-control' type='date' name='date' id='date-input' />
            </div>
            <div className='col-md-2'>
              <label htmlFor='time-input'>Time</label><input className='form-control' type='time' name='time' id='time-input' />
            </div>
            <div className='col-md-2'>
              <label htmlFor='gender-input' >Gender</label>
              <select className='form-control' type='text' name='gender' id='gender-input' >
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
            </div>
          </div>
          <div className='row form-group'>
            <div className='col-md-6'>
              <label htmlFor='home_team-input' >Home Team</label>
              <select className='form-control' type='text' name='home_team' id='home_team-input'>
                {teams.map((team, key) => <option key={key} value={team.teamKey}>{team.name}</option>)}
              </select>
            </div>
            <div className='col-md-6'>
              <label htmlFor='away_team-input' >Away Team</label>
              <select className='form-control' type='text' name='away_team' id='away_team-input' >
                {teams.map((team, key) => <option key={key} value={team.teamKey}>{team.name}</option>)}
              </select>
            </div>
          </div>
          <div className='row form-group'>
            <div className='col-md-6'>
              <label htmlFor='referee_1-input' >Referee #1</label><input className='form-control' type='text' name='referee_1' id='referee_1-input' />
            </div>
            <div className='col-md-6'>
              <label htmlFor='referee_2-input' >Referee #2</label><input className='form-control' type='text' name='referee_2' id='referee_2-input' />
            </div>
          </div>
          <div className='row form-group'>
            <div className='col-md-6'>
              <label htmlFor='timekeeper-input' >Timekeeper</label><input className='form-control' type='text' name='timekeeper' id='timekeeper-input' />
            </div>
            <div className='col-md-6'>
              <label htmlFor='scorekeeper-input' >Scorekeeper</label><input className='form-control' type='text' name='scorekeeper' id='scorekeeper-input' />
            </div>
          </div>
          <input className='btn btn-default' type='submit' value='Make New Game' onClick={this.submitGame} />
        </form>
      </div>
    )
  }
}

export default NewGame
