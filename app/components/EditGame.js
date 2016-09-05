import React from 'react'

class EditGame extends React.Component {

  render () {
    const game = this.props.games[this.props.params.id] || {}
    
    return (
      <div className='container content edit-game'>
        <div className='row'>
          <div className='col-md-4 central-column'>
            <img src='http://placehold.it/250x120?text=LOGO' />
            <h1>Team Name</h1>
          </div>
          <div className='col-md-4 central-column'>
            <h1>Game Status</h1>
            <div className='card-score'>
              <div className='score'>00</div>
              <div className='score'>00</div>
            </div>
          </div>
          <div className='col-md-4 central-column'>
            <img src='http://placehold.it/250x120?text=LOGO' />
            <h1>Team Name</h1>
          </div>
        </div>
        <div className=''>
          <div className='page-header'>
            <h1>Edit Game</h1><h1><i className="fa fa-caret-down" aria-hidden="true"></i></h1>
          </div>
          <div className='row container'>
            <div className='block-header'>
              <h3>Match</h3>
            </div>
            <form>
              <div className='row form-group'>
                <div className='col-md-4'>
                  <label htmlFor='venue-input'>Venue</label>
                  <input className='form-control' type='text' id='venue-input' defaultValue='Venue' />
                </div>
                <div className='col-md-2'>
                  <label htmlFor='gender-input'>gender</label>
                  <input className='form-control' type='text' id='gender-input' defaultValue='Mens' />
                </div>
                <div className='col-md-3'>
                  <label htmlFor='date-input'>Date</label>
                  <input className='form-control' type='date' id='date-input' />
                </div>
                <div className='col-md-3'>
                  <label htmlFor='time-input'>time</label>
                  <input className='form-control' type='time' id='time-input' />
                </div>
              </div>
              <div className='row form-group'>
                <div className='col-md-3'>
                  <label htmlFor='ref-1-input'>referee #1</label>
                  <input className='form-control' type='text' id='ref-1-input' />
                </div>
                <div className='col-md-3'>
                  <label htmlFor='ref-2-input'>referee #1</label>
                  <input className='form-control' type='text' id='ref-2-input' />
                </div>
                <div className='col-md-3'>
                  <label htmlFor='scorekeeper-input'>ScoreKeeper</label>
                  <input className='form-control' type='text' id='scorekeeper-input' />
                </div>
                <div className='col-md-3'>
                  <label htmlFor='timekeeper-input'>TimeKeeper</label>
                  <input className='form-control' type='text' id='timekeeper-input' />
                </div>
              </div>
              <div className='form-group'>
                <button type="submit" className="btn btn-primary center-block">Update</button>
              </div>
            </form>
          </div>
          <div className='row container'>
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
                    <input className='form-control' type='text' id='home-offical-a-input' />
                  </div>
                  <div className='form-group team-offical'>
                    <label htmlFor='home-offical-b-input'>B</label>
                    <input className='form-control' type='text' id='home-offical-b-input' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='block-header'>
                    <h4>Team Officals</h4>
                  </div>
                  <div className='form-group team-offical'>
                    <label htmlFor='home-offical-a-input'>A</label>
                    <input className='form-control' type='text' id='home-offical-a-input' />
                  </div>
                  <div className='form-group team-offical'>
                    <label htmlFor='home-offical-b-input'>B</label>
                    <input className='form-control' type='text' id='home-offical-b-input' />
                  </div>
                </div>
              </div>
              <div className='form-group'>
                <button type="submit" className="btn btn-primary center-block">Update</button>
              </div>
            </form>
          </div>
          <div className='row container'>
            <div className='block-header'>
              <h3>Game Comments</h3>
            </div>
            <form>
              <div className='form-group'>
                <textarea className='form-control' rows='2' />
              </div>
              <div className='form-group'>
                <button type="submit" className="btn btn-primary center-block">Update</button>
              </div>
            </form>
          </div>
        </div>
        <div className='match-report'>
          <div className='page-header'>
            <h1>Match Report</h1><h1><i className="fa fa-caret-down" aria-hidden="true"></i></h1>
          </div>
        </div>
      </div>
    )
  }
}

export default EditGame
