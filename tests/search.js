import test from 'tape'

import { searchByAll } from '../lib/search'

const players = [
  {firstName: 'Tim', lastName: 'Samson', dob: '1992-09-22'},
  {firstName: 'Sam', lastName: 'Gold', dob: '1982-10-10'},
  {firstName: 'John', lastName: 'Doe', dob: '1995-09-22'},
  {firstName: 'Bob', lastName: 'Burger', dob: '1987-09-22'},
  {firstName: 'Dan', lastName: 'Don', dob: '1992-09-22'},
  
]

test('Search by all, single result', (t) => {
  const expectedResults = players[0]
  const expectedResultsLength = 1
  const searchFeild = 'tim'

  const searchResults = searchByAll(players, searchFeild)

  t.equal(searchResults.length, expectedResultsLength, 'Got the correct amount of results')
  t.deepEqual(searchResults[0], expectedResults, 'searchResults = expectedResults')
  t.end()
})

test('Search by all, multiple results', (t) => {
  const expectedResultsLength = 2
  const searchFeild = 'sam'

  const searchResults = searchByAll(players, searchFeild)

  t.equal(searchResults.length, expectedResultsLength, 'Got the correct amount of results')
  t.end()
})