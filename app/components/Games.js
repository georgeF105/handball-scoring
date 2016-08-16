import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  const games = []
  for(let key in props.games) {
    games.push(props.games[key])
  }
  const fetchingGames = props.fetchingGames
  return (
    <div className='container games'>
      {!fetchingGames
        ? (games.length
          ? games.map(game => <h3>Venue {game.venue}</h3>)
          : <h3>No Games Found</h3>)
        : <h3>Loading Games...</h3>
      }
    </div>
  )
}