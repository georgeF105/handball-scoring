import React from 'react'

import GameCard from './GameCard'
import { simpleFilter } from '../../lib/filter'
import { searchByAll } from '../../lib/search'

export default (props) => {
  const userId = props.userId
  const isAdmin = props.isAdmin || false
  const teams = props.teams
  let games = []
  const gamesObj = props.games
  const filterObj = props.filter || {}
  const searchField = props.search || ''
  for (let key in gamesObj) {
    const game = gamesObj[key]
    game.gameKey = key
    game.ownedByCurrentUser = game.owner_id === userId
    games.push(game)
  }
  games = simpleFilter(games, filterObj)
  games = searchByAll(games, searchField)
  const fetchingGames = props.fetchingGames
  const deleteGame = props.deleteGame
  return (
    <div className='games'>
      {!fetchingGames
        ? (games.length
          ? games.map((game, key) => <GameCard key={key} game={game} deleteGame={deleteGame} isAdmin={isAdmin}
            homeTeam={teams[game.home_team_key || game.home_team.key || game.home_team].name || "Can't find team"}
            awayTeam={teams[game.away_team_key || game.away_team.key || game.away_team].name || "Can't find team"} />)
          : <h3>No Games Found</h3>)
        : <h3>Loading Games...</h3>
      }
    </div>
  )
}
