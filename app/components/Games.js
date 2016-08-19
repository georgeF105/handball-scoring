import React from 'react'

import GameCard from './GameCard'

export default (props) => {
  const userId = props.userId
  const teams = props.teams
  const games = []
  const gamesObj = props.games
  console.log('teams', teams)
  for (let key in gamesObj) {
    const game = gamesObj[key]
    game.gameKey = key
    game.ownedByCurrentUser = game.owner_id === userId
    games.push(game)
  }
  const fetchingGames = props.fetchingGames
  return (
    <div className='games'>
      {!fetchingGames
        ? (games.length
          ? games.map((game, key) => <GameCard key={key} game={game} 
              homeTeam={game.status_initialized ? teams[game.home_team.key] && teams[game.home_team.key].name || '???' : teams[game.home_team].name} 
              awayTeam={game.status_initialized ? teams[game.away_team.key] && teams[game.away_team.key].name || '???' : teams[game.away_team].name} />)
          : <h3>No Games Found</h3>)
        : <h3>Loading Games...</h3>
      }
    </div>
  )
}
