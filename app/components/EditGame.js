import React from 'react'

import { updateGame } from '../../lib/gamesFire'

class EditGame extends React.Component {

  updateMatchDetails = (e) => {
    e.preventDefault()
    const gameKey = this.props.params.id
    const game = this.props.games[gameKey]
    game.venue = document.getElementById('venue-input').value
    game.date = document.getElementById('date-input').value
    game.time = document.getElementById('time-input').value
    game.gender = document.getElementById('gender-input').value
    game.referee_1 = document.getElementById('referee_1-input').value
    game.referee_2 = document.getElementById('referee_2-input').value
    game.timekeeper = document.getElementById('timekeeper-input').value
    game.scorekeeper = document.getElementById('scorekeeper-input').value
    updateGame(gameKey, game)
  }

  updateTeamOfficals = (e) => {
    e.preventDefault()
    const gameKey = this.props.params.id
    const game = this.props.games[gameKey]
    game.home_team.offical_a = document.getElementById('home-offical-a-input').value
    game.home_team.offical_b = document.getElementById('home-offical-b-input').value
    game.away_team.offical_a = document.getElementById('away-offical-a-input').value
    game.away_team.offical_b = document.getElementById('away-offical-b-input').value
    console.log('updateTeamOfficals game:', game)
    updateGame(gameKey, game)
  }

  updateGameComments = (e) => {
    e.preventDefault()
    const gameKey = this.props.params.id
    const game = this.props.games[gameKey]
    game.game_comments = document.getElementById('game-comments-input').value
    updateGame(gameKey, game)
  }

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
    const homeOfficalA = game.home_team && game.home_team.offical_a || ''
    const homeOfficalB = game.home_team && game.home_team.offical_b || ''
    const awayOfficalA = game.away_team && game.away_team.offical_a || ''
    const awayOfficalB = game.away_team && game.away_team.offical_b || ''
    const gameComments = game.game_comments || ''
    if(this.props.fetchingGames) {
      return <h1>Loading...</h1>
    }
    return (
      <div className='container content edit-game'>
        <div className='row container'>
          <div className='block-header'>
            <h3>Match Details</h3>
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
                <input className='form-control' type='text' id='referee_1-input' defaultValue={referee_1} />
              </div>
              <div className='col-md-3'>
                <label htmlFor='ref-2-input'>referee #1</label>
                <input className='form-control' type='text' id='referee_2-input' defaultValue={referee_2} />
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
              <button type="submit" className="btn btn-primary center-block" onClick={this.updateMatchDetails}>Update</button>
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
                    <h4>Home Team</h4>
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
                    <h4>Away Team</h4>
                  </div>
                  <div className='form-group team-offical'>
                    <label htmlFor='away-offical-a-input'>A</label>
                    <input className='form-control' type='text' id='away-offical-a-input' defaultValue={awayOfficalA} />
                  </div>
                  <div className='form-group team-offical'>
                    <label htmlFor='away-offical-b-input'>B</label>
                    <input className='form-control' type='text' id='away-offical-b-input' defaultValue={awayOfficalB} />
                  </div>
                </div>
              </div>
              <div className='form-group'>
                <button type="submit" className="btn btn-primary center-block" onClick={this.updateTeamOfficals}>Update</button>
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
              <textarea className='form-control' rows='2' id='game-comments-input' defaultValue={gameComments} />
            </div>
            <div className='form-group'>
              <button type="submit" className="btn btn-primary center-block" onClick={this.updateGameComments}>Update</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default EditGame
