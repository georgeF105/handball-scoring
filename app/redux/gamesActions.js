import { saveGame, getGames, getGame, getTeam } from '../../lib/gamesUtils'
import { hashHistory } from 'react-router'

export const SAVED_GAME = 'SAVED_GAME'
export const REQUEST_GAME = 'REQUEST_GAME'
export const RECEIVE_GAME = 'RECEIVE_GAME'
export const REQUEST_GAMES = 'REQUEST_GAMES'
export const RECEIVE_GAMES = 'RECEIVE_GAMES'

export function requestGame () {
  return {
    type: REQUEST_GAME
  }
}

export function reciveGame (gameObj) {
  return {
    type: RECEIVE_GAME,
    gameObj: gameObj,
    receivedAt: Date.now()
  }
}

export function fetchGame (gameKey) {
  return (dispatch) => {
    dispatch(requestGame())
    console.log('fetching game HERE', gameKey)
    let gameObj = {}
    getGame(gameKey)
      .then(game => {
        gameObj = game
        gameObj.gameKey = gameKey
        return getTeam(game.home_team)
      })
      .then(homeTeam => {
        let homePlayerArr = []
        for(let key in homeTeam.players) {
          homePlayerArr.push(homeTeam.players[key])
        }
        gameObj.home_players = homePlayerArr
        return getTeam(gameObj.away_team)
      })
      .then(awayTeam => {
        let awayPlayerArr = []
        for(let key in awayTeam.players) {
          awayPlayerArr.push(awayTeam.players[key])
        }
        gameObj.away_players = awayPlayerArr
        console.log('gameObj',gameObj)
        dispatch(reciveGame(gameObj))
      })
      .catch(err => {
        console.error(err)
      })
    // fetch game from firebase <== TODO.
  }
}

export function submitGame (gameObj) {
  return (dispatch) => {
    const gameKey = saveGame(gameObj)
    gameObj.gameKey = gameKey
    dispatch(savedGame(gameObj))
    hashHistory.push('game/' + gameKey)
  }
}

export function savedGame (gameObj) {
  return {
    type: SAVED_GAME,
    gameObj: gameObj
  }
}

export function fetchGames (gameKey) {
  return (dispatch) => {
    dispatch(requestGames())
    getGames(games => {
      dispatch(reciveGames(games))
    })
  }
}

export function requestGames () {
  return {
    type: REQUEST_GAMES
  }
}

export function reciveGames (gamesObj) {
  return {
    type: RECEIVE_GAMES,
    gameObj: gamesObj,
    receivedAt: Date.now()
  }
}

export function error (error) {
  return {
    type: 'ERROR',
    list: error,
    receivedAt: Date.now()
  }
}
