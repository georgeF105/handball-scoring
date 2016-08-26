import firebase from './firebaseConfig'

import { pushGame, fetchGames, updateGame, deleteGame, pushEvent, deleteEvent } from './gamesFire'

export const EVENT_GOAL = 'goal'
export const EVENT_7_METER = '7m'
export const EVENT_YELLOW_CARD = 'yc'
export const EVENT_2_MINUTE = '2m'
export const EVENT_RED_CARD = 'rc'

export function saveGame (gameObj) {
  return pushGame(gameObj)
}

export function getGames (reciveGames) {
  fetchGames(reciveGames)
}

/* to be removed */
export function getGame (gameKey) {
  return firebase.database().ref('games/' + gameKey).once('value')
    .then(game => {
      return game.val()
    })
}

/* to be removed */
export function getTeam (teamKey) {
  return firebase.database().ref('teams/' + teamKey).once('value')
    .then(team => {
      return team.val()
    })
}

function updateGameChild (gameKey, key, value) {
  let updates = {}
  updates['games/' + gameKey + '/' + key] = value
  firebase.database().ref().update(updates)
}

export function appendPlayersToGame (gameKey) {
  let gameObj = {}
  getGame(gameKey)
    .then(game => {
      gameObj = game
      gameObj.gameKey = gameKey
      return getTeam(game.home_team)
    })
    .then(homeTeam => {
      const teamKey = gameObj.home_team
      gameObj.home_team = homeTeam
      gameObj.home_team.key = teamKey
      return getTeam(gameObj.away_team)
    })
    .then(awayTeam => {
      const teamKey = gameObj.away_team
      gameObj.away_team = awayTeam
      gameObj.away_team.key = teamKey
      gameObj.status_initialized = true
      updateGame(gameKey, gameObj)
    })
    .catch(err => {
      console.error(err)
    })
}

export function removeGame (gameKey) {
  deleteGame(gameKey)
}

export function createEvent (game, teamKey, playerGameKey, type, time) {
  if (!game.status_initialized || !type) return false
  const gameKey = game.gameKey
  const team = teamKey === game.home_team.key ? 'home' : 'away'
  const player = game[team + '_team'].players[playerGameKey]
  const playerKey = game[team + '_team'].players[playerGameKey].key
  let eventObj = {}
  eventObj.type = type
  eventObj.player_key = playerKey
  eventObj.playerGameKey = playerGameKey
  eventObj.time = time
  eventObj.team = team
  switch (type) {
    case EVENT_GOAL:
      updateGameChild(gameKey, team + '_team/players/' + playerGameKey + '/goals', (player.goals || 0) + 1)
      updateGameChild(gameKey, 'current_score/' + team, game.current_score[team] + 1)
      break
    case EVENT_7_METER:
      break
    case EVENT_YELLOW_CARD:
      updateGameChild(gameKey, team + '_team/players/' + playerGameKey + '/yellow_cards', (player.yellow_cards || 0) + 1)
      break
    case EVENT_2_MINUTE:
      updateGameChild(gameKey, team + '_team/players/' + playerGameKey + '/two_minutes', (player.two_minutes || 0) + 1)
      break
    case EVENT_RED_CARD:
      updateGameChild(gameKey, team + '_team/players/' + playerGameKey + '/red_cards', (player.red_cards || 0) + 1)
      break
    default:
      break
  }
  pushEvent(gameKey, eventObj)
}

export function undoEvent (game, eventKey) {
  const eventObj = game.events[eventKey]
  const gameKey = game.gameKey
  const playerGameKey = eventObj.playerGameKey
  if (!playerGameKey) {
    console.log('playerGameKey not found')
    return false
  }
  const team = game.events[eventKey].team
  const player = game[team + '_team'].players[playerGameKey]

  switch (eventObj.type) {
    case EVENT_GOAL:
      updateGameChild(gameKey, team + '_team/players/' + playerGameKey + '/goals', (player.goals || 0) - 1)
      updateGameChild(gameKey, 'current_score/' + team, game.current_score[team] - 1)
      break
    case EVENT_7_METER:
      break
    case EVENT_YELLOW_CARD:
      updateGameChild(gameKey, team + '_team/players/' + playerGameKey + '/yellow_cards', (player.yellow_cards || 0) - 1)
      break
    case EVENT_2_MINUTE:
      updateGameChild(gameKey, team + '_team/players/' + playerGameKey + '/two_minutes', (player.two_minutes || 0) - 1)
      break
    case EVENT_RED_CARD:
      updateGameChild(gameKey, team + '_team/players/' + playerGameKey + '/red_cards', (player.red_cards || 0) - 1)
      break
    default:
      break
  }
  deleteEvent(gameKey, eventKey)
}

export function undoEvent (game, eventKey) {
  const eventObj = game.events[eventKey]
  const gameKey = game.gameKey
  const playerGameKey = eventObj.playerGameKey
  if (!playerGameKey) {
    console.log('playerGameKey not found')
    return false
  }
  const team = game.events[eventKey].team
  const player = game[team + '_team'].players[playerGameKey]

  switch (eventObj.type) {
    case EVENT_GOAL:
      updateGameChild(gameKey, team + '_team/players/' + playerGameKey + '/goals', (player.goals || 0) - 1)
      updateGameChild(gameKey, 'current_score/' + team, game.current_score[team] - 1)
      break
    case EVENT_7_METER:
      break
    case EVENT_YELLOW_CARD:
      updateGameChild(gameKey, team + '_team/players/' + playerGameKey + '/yellow_cards', (player.yellow_cards || 0) - 1)
      break
    case EVENT_2_MINUTE:
      updateGameChild(gameKey, team + '_team/players/' + playerGameKey + '/two_minutes', (player.two_minutes || 0) - 1)
      break
    case EVENT_RED_CARD:
      updateGameChild(gameKey, team + '_team/players/' + playerGameKey + '/red_cards', (player.red_cards || 0) - 1)
      break
    default:
      break
  }
  deleteEvent(gameKey, eventKey)
}

export function startGameTimer(gameKey, currentTime) {
  updateGameChild(gameKey, 'status_in_play', true)
  updateGameChild(gameKey, 'timer_last_updated', Date.now())
  updateGameChild(gameKey, 'current_time', currentTime)
}

export function pauseGameTimer(gameKey, currentTime) {
  updateGameChild(gameKey, 'status_in_play', false)
  updateGameChild(gameKey, 'timer_last_updated', Date.now())
  updateGameChild(gameKey, 'current_time', currentTime)
}

export function updateGameTime(gameKey, currentTime) {
  updateGameChild(gameKey, 'timer_last_updated', Date.now())
  updateGameChild(gameKey, 'current_time', currentTime)
}