import { fromJS } from 'immutable'

import * as gamesActions from './gamesActions'

const INITAL_STATE = fromJS({
  game: {
    venue: 'GAME VENUE',
    date: 0,
    time: 0,
    gender: 'male',
    home_team: 'HOME TEAM',
    away_team: 'AWAY TEAM',
    referee_1: 'REF 1',
    referee_2: 'REF 2',
    timekeeper: 'TK',
    scorekeeper: 'SK',
    owner_id: 'OWNER ID',
    home_players: [
      {id: '_ID', number: 1},
      {id: '_ID', number: 2},
      {id: '_ID', number: 3},
      {id: '_ID', number: 4},
      {id: '_ID', number: 5},
      {id: '_ID', number: 6},
      {id: '_ID', number: 7},
      {id: '_ID', number: 8},
      {id: '_ID', number: 9},
      {id: '_ID', number: 10},
      {id: '_ID', number: 11},
      {id: '_ID', number: 12},
      {id: '_ID', number: 13}
    ],
    away_players: [
      {id: '_ID', number: 1},
      {id: '_ID', number: 2},
      {id: '_ID', number: 3},
      {id: '_ID', number: 4},
      {id: '_ID', number: 5},
      {id: '_ID', number: 6},
      {id: '_ID', number: 7},
      {id: '_ID', number: 8},
      {id: '_ID', number: 9},
      {id: '_ID', number: 10},
      {id: '_ID', number: 11},
      {id: '_ID', number: 12},
      {id: '_ID', number: 13}
    ],
    events: [
      {team_id: '_ID', player_id: '_ID', team_side: 'home', player_number: 1, type: 'goal', time: 65},
      {team_id: '_ID', player_id: '_ID', team_side: 'away', player_number: 5, type: 'yc', time: 125},
      {team_id: '_ID', player_id: '_ID', team_side: 'home', player_number: 8, type: 'goal', time: 353},
      {team_id: '_ID', player_id: '_ID', team_side: 'away', player_number: 6, type: 'yc', time: 458},
      {team_id: '_ID', player_id: '_ID', team_side: 'home', player_number: 3, type: 'goal', time: 897},
      {team_id: '_ID', player_id: '_ID', team_side: 'away', player_number: 10, type: 'goal', time: 1107},
      {team_id: '_ID', player_id: '_ID', team_side: 'away', player_number: 6, type: '2m', time: 1378},
      {team_id: '_ID', player_id: '_ID', team_side: 'home', player_number: 4, type: 'goal', time: 1503},
      {team_id: '_ID', player_id: '_ID', team_side: 'away', player_number: 6, type: 'rc', time: 1654}
    ],
    current_score: {
      home: 0,
      away: 0
    },
    halftime_score: {
      home: 0,
      away: 0
    },
    fulltime_score: {
      home: 0,
      away: 0
    },
    status_started: false,
    status_halftime_completed: false,
    status_fulltime_completed: false,
    current_time: 1767
  },
  fetchingGame: false,
  games: {},
  fetchingGames: false,
})

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case gamesActions.REQUEST_GAME:
      return state.setIn(['fetchingGame'], true)
    case gamesActions.RECEIVE_GAME:
      return state.setIn(['game'], fromJS(action.gameObj)).set('fetchingGame', false)
    case gamesActions.SAVED_GAME:
      return state.setIn(['game'], fromJS(action.gameObj)).set('fetchingGame', false)
    case gamesActions.REQUEST_GAMES:
      return state.setIn(['fetchingGames'], true)
    case gamesActions.RECEIVE_GAMES:
      return state.setIn(['games'], fromJS(action.gameObj)).set('fetchingGames', false)
    default:
      return state
  }
}
