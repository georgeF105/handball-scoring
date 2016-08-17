import React from 'react'

class NewTeam extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      players: []
    }
  }

  addPlayerToTeam = (playerKey, number) => {
    this.setState({players: this.state.players.push({key: playerKey, number })})
  }

  setTeamName = (e) => {
    const name = e.target.value
    this.setState({ name })
  }

  submitGame = (e) => {
    e.preventDefault()
    let teamObj = {}
    teamObj.venue = document.getElementById('team-name-input').value
    teamObj.gender = document.getElementById('gender-input').value
    this.props.submitTeam(teamObj)
    // this.props.history.push('/')
  }

  render () {
    const loggedIn = true//this.props.loggedIn
    const team = this.props.teams[this.props.params.id]
    console.log('team', team)
    const players = []
    const playersObj = this.props.players
    for (let key in playersObj) {
      let player = playersObj[key]
      player.playerKey = key
      players.push(player)
    }
    const teamPlayers = this.state.players
    return (
      <div className='container content new-team'>
        {loggedIn
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
              <div key={key} className='row'>
                <div className='two columns'>
                  <label>Number</label>
                  <p>player.number</p>
                </div>
                <div className='two columns'>
                  <label>First Name</label>
                </div>
                <div className='two columns'>
                  <label>Last Name</label>
                </div>
                <div className='two columns'>
                  <label>DOB</label>
                </div>
                <div className='two columns'>
                  <label>Mobile</label>
                </div>
                <div className='two columns'>
                  <label>Email</label>
                </div>
              </div>
            })}
            <div className='row'>
              <div className='two columns'>
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
                <input className='u-full-width' type='month' name='dob' id='dob-input' />
              </div>
              <div className='two columns'>
                <label>Mobile</label>
                <input className='u-full-width' type='text' name='mobile' id='mobile-input' />
              </div>
              <div className='two columns'>
                <label>Email</label>
                <input className='u-full-width' type='email' name='email' id='email-input' />
              </div>
            </div>
            <div className='row'>
              <div className='two columns'>
                <label>Number</label>
                <input className='u-full-width' type='text' name='number' id='number-existing-input' />
              </div>
              <div className='seven columns'>
                <label>Choose Existing Player</label>
                <select className='u-full-width' type='text' name='home_team' id='home_team-input'>
                  {players.map((player, key) => <option key={key} value={player.playerKey}>{player.name}</option>)}
                </select>
              </div>
              <div className='three columns'>
                <label> </label>
                <input className='u-full-width' type='button' name='number' value='Select Player' />
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
