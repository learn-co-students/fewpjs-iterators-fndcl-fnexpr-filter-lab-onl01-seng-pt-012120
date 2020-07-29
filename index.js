// Code your solution here
function findMatching(array, string) {
    let match = array.filter(n => {
        return n.toLowerCase() == string.toLowerCase();
      });
      return match
}

function fuzzyMatch(drivers, string){
    let match = drivers.filter(n => {
        return n[0].toLowerCase() == string[0].toLowerCase();
      });
      return match
}

function matchName(drivers, string){
    let arr = drivers.filter(e => { 
        return e.name === string;
    });
    return arr
}

// Flatiron solution:
// function findMatching(source, sought) {
//     return source.filter( possibleMatch =>
//       possibleMatch.toLowerCase() === sought.toLowerCase()
//     )
//   }
  
//   function fuzzyMatch(source, testString) {
//     return source.filter( possibleMatch =>
//       possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
//     )
//   }
  
//   function matchName(source, soughtName) {
//     return source.filter( record => record.name === soughtName)
//   }