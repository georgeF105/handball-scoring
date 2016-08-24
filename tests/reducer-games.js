import test from 'tape'
import configureStore from '../app/redux/store'
import * as gamesActions from '../app/redux/gamesActions'

// console.log('process.env.NODE_ENV = ', process.env.NODE_ENV)

test('Request Games Reducer', (t) => {
  const store = configureStore()

  store.dispatch(gamesActions.requestGames())

  t.equal(store.getState().games.get('fetchingGames'), true, 'fetchingGames is true')
  t.end()
})

test('Recive Games Reducer', (t) => {
  const store = configureStore()
  const gameObj = {
    venue: 'test venue',
    gameKey: 'testGameKey'
  }

  store.dispatch(gamesActions.reciveGames(gameObj))

  t.deepEqual(store.getState().games.get('games').toJS(), gameObj, 'Games = expected')
  t.equal(store.getState().games.get('fetchingGames'), false, 'fetchingGames is false')
  t.end()
})

/*
const dummyGame = {
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
  gameKey: '',
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
}
*/
