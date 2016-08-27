import test from 'tape'

import { convertToArray, simpleFilter } from '../lib/filter'

import testDB from './test-db.json'

test('Filter games by sex', (t) => {
  const games = convertToArray(testDB.games)
  const expectedMaleResults = 4
  const expectedFemaleResults = 2
  const filteredMaleGames = simpleFilter(games, {gender: 'male'})
  const filteredFemaleGames = simpleFilter(games, {gender: 'female'})

  t.equal(filteredMaleGames.length, expectedMaleResults, 'filter by male game got the expected amount of results')
  t.equal(filteredFemaleGames.length, expectedFemaleResults, 'filter by male game got the expected amount of results')
  t.end()
})

test('Filter games nothing', (t) => {
  const games = convertToArray(testDB.games)
  const expectedResults = games.length

  const filteredResults = simpleFilter(games, {})

  t.equal(filteredResults.length, expectedResults, 'filter nothing got the expected amount of results')
  t.end()
})