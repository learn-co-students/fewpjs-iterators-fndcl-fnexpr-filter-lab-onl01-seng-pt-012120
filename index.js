// Code your solution here
function findMatching(arr, string) {
  return arr.filter( name =>
    name.toLowerCase() === string.toLowerCase()
  )
}

function fuzzyMatch(arr, string) {
  return arr.filter( name =>
    name.toLowerCase().indexOf(string.toLowerCase()) === 0
  )
}

function matchName(arr, string) {
  return arr.filter( record => record.name === string)
}