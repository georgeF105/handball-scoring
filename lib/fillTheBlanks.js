
export default function fillTheBlanks (arr, num) {
  for (let i = arr.length; i < num; i++) {
    arr.push({})
  }
  return arr
}
