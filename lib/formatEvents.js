import fillTheBlanks from './fillTheBlanks'
import convertObjToArrWithKey from './convertObjToArrWithKey'
import { EVENT_GOAL } from './gamesUtils'

export default function formatEvents (events, halfLength) {
  const eventsArr = convertObjToArrWithKey(events)
  const firstHalfGoals = eventsArr.filter(event => {
    return event.type === EVENT_GOAL && event.time <= halfLength
  })
  const secondHalfGoals = eventsArr.filter(event => {
    return event.type === EVENT_GOAL && event.time >= halfLength
  })

  let firstEvents = []

  firstHalfGoals.forEach((goal, index) => {
    let score = index
      ? Object.assign({}, firstEvents[index - 1])
      : {homeScore: 0, awayScore: 0}
    if (goal.team === 'home') {
      score.homeScore++
    } else {
      score.awayScore++
    }
    firstEvents.push(score)
  })

  let secondEvents = []
  secondHalfGoals.forEach((goal, index) => {
    let score = index
      ? Object.assign({}, secondEvents[index - 1])
      : Object.assign({}, firstEvents[firstEvents.length - 1])
    if (goal.team === 'home') {
      score.homeScore++
    } else {
      score.awayScore++
    }
    secondEvents.push(score)
  })

  let formatedEvents = {}
  formatedEvents.first = fillTheBlanks(firstEvents, 44)
  formatedEvents.second = fillTheBlanks(secondEvents, 44)
  return formatedEvents
}
