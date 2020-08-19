// Code your solution here
let findMatching = (drivers, string) => {
    return drivers.filter(match => 
        match.toLowerCase() === string.toLowerCase()
    )
}


let fuzzyMatch = (drivers, string) => {
    return drivers.filter(match => 
        match.toLowerCase().indexOf(string.toLowerCase()) === 0
    )
}

let matchName = (drivers, string) => {
    return drivers.filter(match => 
        match.name.toLowerCase() === string.toLowerCase()
    )
}