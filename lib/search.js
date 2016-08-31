
export function searchByAll (array, searchField) {
  return array.filter(obj => {
    return Object.keys(obj).reduce((pre, key) => {
      return pre || obj[key].search(makeRegExp(searchField)) !== -1
    }, false)
  })
}

function makeRegExp (searchField) {
  return new RegExp(searchField.split('*').join('.*'), 'i')
}
