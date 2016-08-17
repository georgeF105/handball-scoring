
export function formatTime(time) {
  let hours = Math.floor(time / 3600)
  let minutes = Math.floor((time - (hours * 3600)) / 60)
  let seconds = time - (hours * 3600) - (minutes * 60)

  if (hours < 10) { hours = '0' + hours }
  if (minutes < 10) { minutes = '0' + minutes }
  if (seconds < 10) { seconds = '0' + seconds }
  return minutes + ':' + seconds
}

export function formatScore(score) {
  return (score < 10) ? '0' + score : score
}