import React from 'react'

class NewGame extends React.Component {

  submitGame = (e) => {
    e.preventDefault()
    console.log('Make New Game', e)
    let gameObj = {}
    gameObj.venue = document.getElementById('venue-input').value
    gameObj.date = document.getElementById('date-input').value
    gameObj.time = document.getElementById('time-input').value
    gameObj.gender = document.getElementById('gender-input').value
    gameObj.home_team = document.getElementById('home_team-input').value
    gameObj.away_team = document.getElementById('away_team-input').value
    gameObj.referee_1 = document.getElementById('referee_1-input').value
    gameObj.referee_2 = document.getElementById('referee_2-input').value
    gameObj.timekeeper = document.getElementById('timekeeper-input').value
    gameObj.scorekeeper = document.getElementById('scorekeeper-input').value
    gameObj.owner_id = this.props.userId
    console.log('gameObj', gameObj)
    this.props.submitGame(gameObj)
    // this.props.history.push('/')
  }

  render () {
    const loggedIn = this.props.loggedIn
    return (
      <div className='container projects'>
        {loggedIn
          ? <form className='new-game-form'>
            <div className='row'>
              <div className='six columns'>
                <label>Venue</label><input className='u-full-width' type='text' name='venue' id='venue-input' />
              </div>
              <div className='two columns'>
                <label>date</label><input className='u-full-width' type='date' name='date' id='date-input' />
              </div>
              <div className='two columns'>
                <label>time</label><input className='u-full-width' type='time' name='time' id='time-input' />
              </div>
              <div className='two columns'>
                <label htmlFor='gender-input' >Gender</label>
                <select type='text' name='gender' id='gender-input' >
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </select>
              </div>
            </div>
            <div className='row'>
              <div className='six columns'>
                <label>Home Team</label><input className='u-full-width' type='text' name='home_team' id='home_team-input' />
              </div>
              <div className='six columns'>
                <label>Away Team</label><input className='u-full-width' type='text' name='away_team' id='away_team-input' />
              </div>
            </div>
            <div className='row'>
              <div className='six columns'>
                <label>Referee #1</label><input className='u-full-width' type='text' name='referee_1' id='referee_1-input' />
              </div>
              <div className='six columns'>
                <label>Referee #2</label><input className='u-full-width' type='text' name='referee_2' id='referee_2-input' />
              </div>
            </div>
            <div className='row'>
              <div className='six columns'>
                <label>Timekeeper</label><input className='u-full-width' type='text' name='timekeeper' id='timekeeper-input' />
              </div>
              <div className='six columns'>
                <label>Scorekeeper</label><input className='u-full-width' type='text' name='scorekeeper' id='scorekeeper-input' />
              </div>
            </div>
            <input className='button-primary' type='submit' value='Make New Game' onClick={this.submitGame} />
          </form>
          : <div className='message-box'>
            <h3>Log In To Make Game</h3>
          </div>}
      </div>
    )
  }
}

export default NewGame
