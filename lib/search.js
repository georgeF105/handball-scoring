
export function searchByAll (array, searchField) {
  return array.filter(obj => {
    return Object.keys(obj).reduce((pre, key) => {
      return (typeof obj[key] === 'string') ? (pre || obj[key].search(makeRegExp(searchField)) !== -1) : pre
    }, false)
  })
}

function makeRegExp (searchField) {
  return new RegExp(searchField.split('*').join('.*'), 'i')
}
