import test from 'tape'

import { EVENT_GOAL, calculateScoreByTime } from '../lib/gamesUtils'

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
  const homeHalfTimeScoreActual = calculateScoreByTime(events, 'home', halfTimeLength)
  const awayHalfTimeScoreActual = calculateScoreByTime(events, 'away', halfTimeLength)
  const homeFullTimeScoreActual = calculateScoreByTime(events, 'home', halfTimeLength * 2)
  const awayFullTimeScoreActual = calculateScoreByTime(events, 'away', halfTimeLength * 2)

  t.equal(homeHalfTimeScoreActual, homeHalfTimeScoreExpected, 'homeHalfTimeScore = Expected')
  t.equal(awayHalfTimeScoreActual, awayHalfTimeScoreExpected, 'awayHalfTimeScore = Expected')
  t.equal(homeFullTimeScoreActual, homeFullTimeScoreExpected, 'homeFullTimeScore = Expected')
  t.equal(awayFullTimeScoreActual, awayFullTimeScoreExpected, 'awayFullTimeScore = Expected')

  t.end()
})
