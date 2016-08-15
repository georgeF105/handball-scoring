import React from 'react'

class NewGame extends React.Component {

  componentDidMount () {
    console.log('fetching projects')
    // this.props.fetchProjects()
  }

  // makeNewGame = (e) => {
  //   e.preventDefault()
  //   console.log('Make New Game', e)
  // }

  render () {
    const user = this.props.user
    return (
      <div className='container projects'>
        <form className='new-game-form'>
          <div className='row'>
            <div className='six columns'>
              <label>Venue</label><input className="u-full-width" type='text' name='venue' id='venue-input' />
            </div>
            <div className='two columns'>
              <label>date</label><input className="u-full-width" type='date' name='date' id='date-input' />
            </div>
            <div className='two columns'>
              <label>time</label><input className="u-full-width" type='time' name='time' id='time-input' />
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
              <label>Home Team</label><input className="u-full-width" type='text' name='home_team' />
            </div>
            <div className='six columns'>
              <label>Away Team</label><input className="u-full-width" type='text' name='away_team' />
            </div>
          </div>
          <div className='row'>
            <div className='six columns'>
              <label>Referee #1</label><input className="u-full-width" type='text' name='referee_1' />
            </div>
            <div className='six columns'>
              <label>Referee #2</label><input className="u-full-width" type='text' name='referee_2' />
            </div>
          </div>
          <div className='row'>
            <div className='six columns'>
              <label>Timekeeper</label><input className="u-full-width" type='text' name='timekeeper' />
            </div>
            <div className='six columns'>
              <label>Scorekeeper</label><input className="u-full-width" type='text' name='scorekeeper' />
            </div>
          </div>
          <input className="button-primary" type="submit" value="Make New Game" />
        </form>
      </div>
    )
  }
}

export default NewGame
