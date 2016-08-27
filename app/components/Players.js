import React from 'react'
import { Link } from 'react-router'

import { simpleFilter } from '../../lib/filter'

export default (props) => {
  const filterObj = props.filter || {}
  let players = []
  for (let key in props.players) {
    const player = props.players[key]
    player.key = key
    players.push(player)
  }
  players = simpleFilter(players, filterObj)
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
