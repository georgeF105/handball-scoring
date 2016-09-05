import React from 'react'

import MatchReportContainer from './containers/MatchReportContainer'
import EditGameContainer from './containers/EditGameContainer'
import { formatScore } from '../../lib/formatNumber'


class Game extends React.Component {
  constructor (props) {
    super(props)
    this.state = {showEdit: false, showReport: false}
  }

  toggleEditShow = () => {
    this.setState({showEdit: !this.state.showEdit})
  }

  toggleReportShow = () => {
    this.setState({showReport: !this.state.showReport})
  }

  render () {
    const showEdit = this.state.showEdit
    const showReport = this.state.showReport
    const game = this.props.games[this.props.params.id] || {}
    const homeTeamName = game.home_team && game.home_team.name || 'Home Team'
    const awayTeamName = game.away_team && game.away_team.name || 'Away Team'
    const homeTeamScore = formatScore(game.current_score && game.current_score.home || 0)
    const awayTeamScore = formatScore(game.current_score && game.current_score.away || 0)

    const initalized = game.status_initialized || false
    const firstStarted = game.status_firsthalf_started || false
    const firstComp = game.status_firsthalf_completed || false
    const secondStarted = game.status_secondhalf_started || false
    const secondComp = game.status_secondhalf_completed || false
    const gameStatus = firstStarted && firstComp && secondStarted && secondComp
      ? 'Full Time' : firstStarted && firstComp && secondStarted
      ? 'Second Half' : firstStarted && firstComp
      ? 'Half Time' : firstStarted && initalized
      ? 'First Half' : 'Not Started'
    return (
      <div className='container content game-page'>
        <div className='row game-page-header'>
          <div className='col-md-4 central-column'>
            <img src='http://placehold.it/250x120?text=LOGO' />
            <h1>{homeTeamName}</h1>
          </div>
          <div className='col-md-4 central-column'>
            <h1>{gameStatus}</h1>
            <div className='card-score'>
              <div className='score'>{homeTeamScore}</div>
              <div className='score'>{awayTeamScore}</div>
            </div>
          </div>
          <div className='col-md-4 central-column'>
            <img src='http://placehold.it/250x120?text=LOGO' />
            <h1>{homeTeamName}</h1>
          </div>
        </div>

        <div className=''>
          <div className='page-header expandable-header' onClick={this.toggleEditShow}>
            <h1>Edit Game</h1><h1>
              {showEdit
                ? <i className='fa fa-caret-up' aria-hidden='true' />
                : <i className='fa fa-caret-down' aria-hidden='true' />}
            </h1>
          </div>
          {showEdit ? <EditGameContainer {...this.props} /> : null }
        </div>
        <div className=''>
          <div className='page-header expandable-header' onClick={this.toggleReportShow}>
            <h1>Match Report</h1><h1>
              {showReport
                ? <i className='fa fa-caret-up' aria-hidden='true' />
                : <i className='fa fa-caret-down' aria-hidden='true' />}
            </h1>
          </div>
          {showReport ? <MatchReportContainer {...this.props} /> : null }
        </div>
      </div>
    )
  }
}

export default Game
