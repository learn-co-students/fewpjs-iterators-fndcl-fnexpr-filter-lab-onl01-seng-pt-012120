const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(drivers, name) {
    return drivers.filter(el => el.toLowerCase().indexOf(name.toLowerCase()) !== -1)
}

function fuzzyMatch(drivers, str){
    return drivers.filter(function(n) {
         return n.startsWith(str)
    })
}

function matchName(drivers, str) {
    return drivers.filter(function(n) {
        return n.name === str
    })
}