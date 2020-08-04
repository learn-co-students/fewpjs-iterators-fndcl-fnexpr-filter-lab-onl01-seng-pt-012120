// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
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
  return drivers.filter(driverName => driverName.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(driverName => driverName.slice(0,2) === string)
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name)
}

matchName(drivers, "Bobby")