import React from 'react'

import GameCard from './GameCard'

export default (props) => {
  const teams = []
  for (let key in props.teams) {
    const team = props.teams[key]
    team.teamKey = key
    teams.push(game)
  }
  return (
    <div className='container content games'>
      {teams.length
        ? teams.map((team, key) => {
          return (
            <div className='team-card card'>
              <h3>{team.name}</h3>
            </div>
          )
        })
        : <h3>No Teams Found</h3>)
      }
    </div>
  )
}