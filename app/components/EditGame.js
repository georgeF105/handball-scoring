import React from 'react'

class EditGame extends React.Component {
  
  render () {
    const game = this.props.games[this.props.params.id] || {}
    console.log('game', game)
    const venue = game.venue || 'venue'
    const gender = game.gender || ''
    const date = game.date
    const time = game.time
    const referee_1 = game.referee_1
    const referee_2 = game.referee_2
    const timekeeper = game.timekeeper
    const scorekeeper = game.scorekeeper
    const gameInitialized = game.status_initialized
    const homeOfficalA = game.home_team && game.home_team.officialA || ''
    const homeOfficalB = game.home_team && game.home_team.officialB || ''
    const awayOfficalA = game.away_team && game.away_team.officialA || ''
    const awayOfficalB = game.away_team && game.away_team.officialB || ''
    const gameComments = game.comments || ''
    if(this.props.fetchingGames) {
      return <h1>Loading...</h1>
    }
    return (
      <div className='container content edit-game'>
        <div className='row container'>
          <div className='block-header'>
            <h3>Match</h3>
          </div>
          <form>
            <div className='row form-group'>
              <div className='col-md-4'>
                <label htmlFor='venue-input'>Venue</label>
                <input className='form-control' type='text' id='venue-input' defaultValue={venue} />
              </div>
              <div className='col-md-2'>
                <label htmlFor='gender-input'>gender</label>
                <select className='form-control' type='text' name='gender' id='gender-input' defaultValue={gender} >
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </select>
              </div>
              <div className='col-md-3'>
                <label htmlFor='date-input'>Date</label>
                <input className='form-control' type='date' id='date-input' defaultValue={date} />
              </div>
              <div className='col-md-3'>
                <label htmlFor='time-input'>time</label>
                <input className='form-control' type='time' id='time-input'  defaultValue={time} />
              </div>
            </div>
            <div className='row form-group'>
              <div className='col-md-3'>
                <label htmlFor='ref-1-input'>referee #1</label>
                <input className='form-control' type='text' id='ref-1-input' defaultValue={referee_1} />
              </div>
              <div className='col-md-3'>
                <label htmlFor='ref-2-input'>referee #1</label>
                <input className='form-control' type='text' id='ref-2-input' defaultValue={referee_2} />
              </div>
              <div className='col-md-3'>
                <label htmlFor='scorekeeper-input'>ScoreKeeper</label>
                <input className='form-control' type='text' id='scorekeeper-input' defaultValue={scorekeeper} />
              </div>
              <div className='col-md-3'>
                <label htmlFor='timekeeper-input'>TimeKeeper</label>
                <input className='form-control' type='text' id='timekeeper-input' defaultValue={timekeeper} />
              </div>
            </div>
            <div className='form-group'>
              <button type="submit" className="btn btn-primary center-block">Update</button>
            </div>
          </form>
        </div>
        {gameInitialized
          ? <div className='row container'>
            <div className='block-header'>
              <h3>Team Officals</h3>
            </div>
            <form>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='block-header'>
                    <h4>Team Officals</h4>
                  </div>
                  <div className='form-group team-offical'>
                    <label htmlFor='home-offical-a-input'>A</label>
                    <input className='form-control' type='text' id='home-offical-a-input' defaultValue={homeOfficalA} />
                  </div>
                  <div className='form-group team-offical'>
                    <label htmlFor='home-offical-b-input'>B</label>
                    <input className='form-control' type='text' id='home-offical-b-input' defaultValue={homeOfficalB} />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='block-header'>
                    <h4>Team Officals</h4>
                  </div>
                  <div className='form-group team-offical'>
                    <label htmlFor='home-offical-a-input'>A</label>
                    <input className='form-control' type='text' id='home-offical-a-input' defaultValue={awayOfficalA} />
                  </div>
                  <div className='form-group team-offical'>
                    <label htmlFor='home-offical-b-input'>B</label>
                    <input className='form-control' type='text' id='home-offical-b-input' defaultValue={awayOfficalB} />
                  </div>
                </div>
              </div>
              <div className='form-group'>
                <button type="submit" className="btn btn-primary center-block">Update</button>
              </div>
            </form>
          </div>
          : null}
        <div className='row container'>
          <div className='block-header'>
            <h3>Game Comments</h3>
          </div>
          <form>
            <div className='form-group'>
              <textarea className='form-control' rows='2' defaultValue={gameComments} />
            </div>
            <div className='form-group'>
              <button type="submit" className="btn btn-primary center-block">Update</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default EditGame
