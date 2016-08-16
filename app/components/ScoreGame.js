import React from 'react'
import TeamTable from './TeamTable'

class ScoreGame extends React.Component {

  render () {
    const game = this.props.games[this.props.params.id]
    const players = [
      {num:1},{num:2},{num:3},{num:4},{num:5},{num:6},{num:7},{num:8},
      {num:9},{num:10},{num:11},{num:12},{num:13},{num:14},{num:15},{num:16}
    ]
    return (
      <div className='score-game'>
        <div className='team-table-column'>
          <div className='team-logo'>
            <img src="http://placehold.it/250x120?text=LOGO" />
          </div>
          <TeamTable teamName='home team' players={players}/>
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
          <TeamTable teamName={'away team'} players={players}/>
        </div>
      </div>
    )
  }
}

export default ScoreGame
