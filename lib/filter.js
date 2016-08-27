
export function convertToArray (objects) {
  let arr = []
  for (let key in objects) {
    const object = objects[key]
    object.key = key
    arr.push(object)
  }
  return arr
}
export function simpleFilter (array, filterObj) {
  return array.filter(obj => {
    return Object.keys(filterObj).reduce((pre, key, index) => {
      return pre && (obj[key] === filterObj[key])
    }, true)
  })
}
