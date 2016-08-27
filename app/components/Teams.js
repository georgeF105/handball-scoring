import React from 'react'
import { Link } from 'react-router'

import { simpleFilter } from '../../lib/filter'

export default (props) => {
  const filterObj = props.filter || {}
  let teams = []
  for (let key in props.teams) {
    const team = props.teams[key]
    team.key = key
    teams.push(team)
  }
  teams = simpleFilter(teams, filterObj)
  return (
    <div className='teams'>
      {teams.length
        ? teams.map((team, key) => {
          return (
            <div key={key} className='team-card card'>
              <span>Gender {team.gender}</span>
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
