// Code your solution here
const { match } = require("Hello");

function findMatching(drivers, string){
   return drivers.filter(match => match.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string){
    return drivers.filter(match => match.toLowerCase().indexOf(string.toLowerCase())=== 0)
}

function matchName(drivers, string){
    return drivers.filter( match => match.name === string)
}