import test from 'tape'

import { EVENT_GOAL } from '../lib/gamesUtils'
import formatEvents from '../lib/formatEvents'
import fillTheBlanks from '../lib/fillTheBlanks'

test('calculateScoreByTime()', (t) => {
  const events = [
    {type: EVENT_GOAL, team: 'home', time: 10},
    {type: EVENT_GOAL, team: 'away', time: 20},
    {type: EVENT_GOAL, team: 'home', time: 30},
    {type: EVENT_GOAL, team: 'home', time: 40},
    {type: EVENT_GOAL, team: 'away', time: 50},
    {type: EVENT_GOAL, team: 'away', time: 60},
    {type: EVENT_GOAL, team: 'home', time: 70},
    {type: EVENT_GOAL, team: 'home', time: 80},
    {type: EVENT_GOAL, team: 'away', time: 90},
    {type: EVENT_GOAL, team: 'home', time: 100}
  ]
  const halfTimeLength = 55
  const homeHalfTimeScoreExpected = 3
  const awayHalfTimeScoreExpected = 2
  const homeFullTimeScoreExpected = 6
  const awayFullTimeScoreExpected = 4
  const expectedFromatedEvents = {}
  expectedFromatedEvents.first = fillTheBlanks([
    {homeScore: 1, awayScore: 0},
    {homeScore: 1, awayScore: 1},
    {homeScore: 2, awayScore: 1},
    {homeScore: 3, awayScore: 1},
    {homeScore: 3, awayScore: 2}
  ], 44)
  expectedFromatedEvents.second = fillTheBlanks([
    {homeScore: 3, awayScore: 2},
    {homeScore: 3, awayScore: 3},
    {homeScore: 4, awayScore: 3},
    {homeScore: 5, awayScore: 3},
    {homeScore: 5, awayScore: 4},
    {homeScore: 6, awayScore: 4}
  ], 44)

  const formatedEvents = formatEvents(events, halfTimeLength)

  t.deepEqual(formatedEvents, expectedFromatedEvents, 'formatEvents = Expected')

  t.end()
})
