// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(obj => {
        return obj.toUpperCase() === string.toUpperCase()
    })
}
// Write findMatching- This function takes an array of drivers and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

function fuzzyMatch(drivers, string) {
    return drivers.filter(obj => {
        return obj.startsWith(string)
    })
}
// Write fuzzyMatch - This function takes an array of drivers and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

function matchName (drivers, string) {
    return drivers.filter(obj => {
        return obj.name === string
    })
}
// Write matchName - This function takes an array of drivers and a string as arguments. In this function, each element of the drivers array is a JavaScript object that has a property of name. The function should return each element whose name property matches the provided string argument.