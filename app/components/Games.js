import React from 'react'

import GameCard from './GameCard'

export default (props) => {
  const userId = props.userId
  const games = []
  for (let key in props.games) {
    const game = props.games[key]
    game.gameKey = key
    game.ownedByCurrentUser = game.owner_id === userId
    games.push(game)
  }
  const fetchingGames = props.fetchingGames
  return (
    <div className='container games'>
      {!fetchingGames
        ? (games.length
          ? games.map(game => <GameCard game={game} />)
          : <h3>No Games Found</h3>)
        : <h3>Loading Games...</h3>
      }
    </div>
  )
}
