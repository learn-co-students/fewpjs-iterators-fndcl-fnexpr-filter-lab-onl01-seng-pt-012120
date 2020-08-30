const { stringContaining } = require("expect")

function findMatching(array, string) {
    return array.filter(driver => driver.toUpperCase() === string.toUpperCase())
};

function fuzzyMatch(array, string) {
    return array.filter(driver => driver.startsWith(string))
};

function matchName(array, string) {
    return array.filter(driver => driver.name === string)
};