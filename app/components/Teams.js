import React from 'react'
import { Link } from 'react-router'

import GameCard from './GameCard'

export default (props) => {
  const teams = []
  for (let key in props.teams) {
    const team = props.teams[key]
    team.key = key
    teams.push(team)
  }
  return (
    <div className='teams'>
      {teams.length
        ? teams.map((team, key) => {
          return (
            <div key={key} className='team-card card'>
              <h5>{team.name}</h5>
              <Link to={`/team/${team.key}/edit`}>Edit Team</Link>
            </div>
          )
        })
        : <h3>No Teams Found</h3>
      }
    </div>
  )
}