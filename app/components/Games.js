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
  const deleteGame = props.deleteGame
  return (
    <div className='games'>
      {!fetchingGames
        ? (games.length
          ? games.map((game, key) => <GameCard key={key} game={game} deleteGame={deleteGame}
              homeTeam={game.status_initialized ? teams[game.home_team.key] && teams[game.home_team.key].name || '???' : teams[game.home_team] && teams[game.home_team].name || "Can't find team"} 
              awayTeam={game.status_initialized ? teams[game.away_team.key] && teams[game.away_team.key].name || '???' : teams[game.away_team] && teams[game.away_team].name || "Can't find team"} />)
          : <h3>No Games Found</h3>)
        : <h3>Loading Games...</h3>
      }
    </div>
  )
}
