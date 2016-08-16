import React from 'react'

class ScoreGame extends React.Component {

  render () {
    const game = this.props.games[this.props.params.id]
    return (
      <div className='score-game'>
        <div className='team-table-column'>
          <div className='team-logo'>
            <img src="http://placehold.it/250x120?text=LOGO" />
          </div>
          <div className='team-table'>
          </div>
        </div>
        <div className='centre-column'>
          <div className='game-timer'>
          </div>
          <div className='scores-board'>
           <div className='score-board'>
           </div>
           <div className='score-board'>
           </div>
          </div>
        </div>
        <div className='team-table-column'>
          <div className='team-logo'>
            <img src="http://placehold.it/250x120?text=LOGO" />
          </div>
          <div className='team-table'>
          </div>
        </div>
      </div>
    )
  }
}

export default ScoreGame
