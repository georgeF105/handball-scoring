import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  const players = []
  for (let key in props.players) {
    const player = props.players[key]
    player.key = key
    players.push(player)
  }
  return (
    <div className='players'>
      {players.length
        ? players.map((player, key) => {
          return (
            <div key={key} className='player-card card'>
              <h5>{player.first_name + ' ' + player.last_name}</h5>
              <Link to={`/player/${player.key}/edit`}>Edit Player</Link>
            </div>
          )
        })
        : <h3>No Players Found</h3>
      }
    </div>
  )
}
