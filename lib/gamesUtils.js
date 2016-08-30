
import { pushGame, fetchGames, updateGame, deleteGame, pushEvent, deleteEvent, updateGameChild } from './gamesFire'

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

export function initializeGame (gameKey, game, homeTeam, awayTeam) {
  let gameObj = {}
  gameObj = game
  gameObj.gameKey = gameKey
  const homeTeamKey = game.home_team
  const awayTeamKey = game.away_team
  gameObj.home_team = homeTeam
  gameObj.home_team.key = homeTeamKey
  gameObj.away_team = awayTeam
  gameObj.away_team.key = awayTeamKey
  gameObj.status_initialized = true
  updateGame(gameKey, gameObj)
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

export function startGameTimer (gameKey, currentTime) {
  updateGameChild(gameKey, 'status_in_play', true)
  updateGameChild(gameKey, 'timer_last_updated', Date.now())
  updateGameChild(gameKey, 'current_time', currentTime)
}

export function pauseGameTimer (gameKey, currentTime) {
  updateGameChild(gameKey, 'status_in_play', false)
  updateGameChild(gameKey, 'timer_last_updated', Date.now())
  updateGameChild(gameKey, 'current_time', currentTime)
}

export function updateGameTime (gameKey, currentTime) {
  updateGameChild(gameKey, 'timer_last_updated', Date.now())
  updateGameChild(gameKey, 'current_time', currentTime)
}

export function completeFirstHalf (gameKey) {
  updateGameChild(gameKey, 'status_firsthalf_completed', true)
}

export function completeSecondHalf (gameKey) {
  updateGameChild(gameKey, 'status_secondhalf_completed', true)
}

export function startFirstHalf (gameKey) {
  updateGameChild(gameKey, 'status_firsthalf_started', true)
}

export function startSecondHalf (gameKey) {
  updateGameChild(gameKey, 'status_secondhalf_started', true)
}

export function calculateFinalScore (gameKey, game) {
  const halfLength = (game.half_length || 20) * 60
  const events = []
  Object.keys(game.events).map(key => {
    events.push(game.events[key])
  })
  const homeTeamHalfTimeScore = calculateScoreByTime(events, 'home', halfLength)
  const awayTeamHalfTimeScore = calculateScoreByTime(events, 'away', halfLength)
  const homeTeamFullTimeScore = calculateScoreByTime(events, 'home', halfLength * 2)
  const awayTeamFullTimeScore = calculateScoreByTime(events, 'away', halfLength * 2)
  updateGameChild(gameKey, 'halftime_score/home', homeTeamHalfTimeScore)
  updateGameChild(gameKey, 'halftime_score/away', awayTeamHalfTimeScore)
  updateGameChild(gameKey, 'fulltime_score/home', homeTeamFullTimeScore)
  updateGameChild(gameKey, 'fulltime_score/away', awayTeamFullTimeScore)
}

export function calculateScoreByTime (events, team, time) {
  return events.reduce((pre, event) => {
    if (event.type === EVENT_GOAL && event.team === team && event.time <= time) {
      return pre + 1
    }
    return pre
  }, 0)
}
