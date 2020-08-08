// Code your solution here
function findMatching(arr, string) {
    return arr.filter(obj => {
        return obj.toUpperCase() === string.toUpperCase()
    });
}

function fuzzyMatch(arr, string) {
    return arr.filter(obj => {
        return obj.startsWith(string)
    });
}

function matchName(arr, string) {
    return arr.filter(obj => {
        return obj.name === string
    });
}