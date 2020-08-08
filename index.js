// Code your solution here
function findMatching(arr, string) {
    let matches = arr.filter(obj => {
        return obj.toUpperCase() == string.toUpperCase()
    });
    return matches
}

function fuzzyMatch(arr, string) {
    let matches = arr.filter(obj => {
        return obj.startsWith(string)
    });
    return matches
}

function matchName(arr, string) {
    let matches = arr.filter(obj => {
        return obj.name === string
    });
    return matches
}