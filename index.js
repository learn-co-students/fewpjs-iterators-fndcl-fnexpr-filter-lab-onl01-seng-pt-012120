// Code your solution here
function findMatching(arr,ele)
  {
  return arr.filter(n => n.toLowerCase() === ele.toLowerCase());
  }

function fuzzyMatch(arr,ele)
  {
    return arr.filter(n => n.substring(0,1) === ele.substring(0,1));
  }

function matchName(arr,ele)
  {
    return arr.filter(n => n.name === ele)
  }
