import React from 'react'

import MatchReportContainer from './containers/MatchReportContainer'
import EditGameContainer from './containers/EditGameContainer'

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
    return (
      <div className='container content game-page'>
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
          <div className='page-header expandable-header' onClick={this.toggleEditShow}>
            <h1>Edit Game</h1><h1>
              {showEdit 
                ? <i className="fa fa-caret-up" aria-hidden="true"/>
                : <i className="fa fa-caret-down" aria-hidden="true"/>}
            </h1>
          </div>
          {showEdit ? <EditGameContainer {...this.props} /> : null }
        </div>
        <div className=''>
          <div className='page-header expandable-header'  onClick={this.toggleReportShow}>
            <h1>Match Report</h1><h1>
              {showEdit 
                ? <i className="fa fa-caret-up" aria-hidden="true"/>
                : <i className="fa fa-caret-down" aria-hidden="true"/>}
            </h1>
          </div>
          {showReport ? <MatchReportContainer {...this.props} /> : null }
        </div>
      </div>
    )
  }
}

export default Game