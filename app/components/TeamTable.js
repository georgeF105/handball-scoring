import React from 'react'

export default (props) => {
  const players = props.players
  const teamName = props.teamName
  return (
    <div className='team-table table'>
      <div className='team-table row title'>
        {teamName}
      </div>
      <div className='team-table row heading'>
        <div className='team-table col num'>#</div>
        <div className='team-table col goal'>Goals</div>
        <div className='team-table col yellow-card'>Penalties</div>
      </div>
      {players.map((player, key) => {
        return (
          <div key={key} className='team-table row player'>
            <div className='team-table col num'>{player.num}</div>
            <div className='team-table col goal'></div>
            <div className='team-table col yellow-card'></div>
          </div>
        )
      })}
    </div>
  )
}

