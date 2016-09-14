
export default function convertObjToArrWithKeys (objects) {
  let arr = []
  for (let key in objects) {
    const object = objects[key]
    object.key = key
    arr.push(object)
  }
  return arr
}
