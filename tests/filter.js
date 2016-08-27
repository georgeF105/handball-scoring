import test from 'tape'

import { simpleFilter } from '../lib/filter'

import testDB from './test-db.json'

test('Filter games by sex', (t) => {
  const games = testDB.games
  const expectedMaleResults = 5
  const expectedFemaleResults = 3

  const filteredMaleGames = simpleFilter(games, {gender: 'male'})
  const filteredFemaleGames = simpleFilter(games, {gender: 'female'})

  t.equal(filteredMaleGames.length, expectedMaleResults, 'filter by male game got the expected amount of results')
  t.equal(filteredFemaleGames.length, expectedMaleResults, 'filter by male game got the expected amount of results')
  t.end()
})