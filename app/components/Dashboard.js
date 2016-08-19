import React from 'react'

import Games from './Games'
import Teams from './Teams'

export default (props) => {
  const userId = props.userId
  const games = props.games || {}
  const teams = props.teams || {}
  const fetching = props.fetchingGames || props.fetchingTeams
  return (
    <div className='container content dashboard'>
      <h1>Dashboard</h1>
      <div className='row'>
        <div className='six columns'>
          {fetching ? <h3>Loading...</h3> :<Games userId={userId} games={games} teams={teams} />}
        </div>
        <div className='six columns'>
          {fetching ? <h3>Loading...</h3> : <Teams teams={teams} />}
        </div>
      </div>
    </div>
  )
}
