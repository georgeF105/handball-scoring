import React from 'react'

class EditGame extends React.Component {

  render () {
    const game = this.props.games[this.props.params.id] || {}
    
    return (
      <div className='container content edit-game'>
        <h1>Edit Game</h1>
      </div>
    )
  }
}

export default EditGame
