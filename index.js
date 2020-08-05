// Code your solution here


function findMatching (array, string){
    let drivers = array.filter (driver =>{
        return driver.toLowerCase() == string.toLowerCase()
    })
    return drivers
}

//let filterBreeds = dogBreeds.filter(function(e) {
    //return e.innerText.startsWith(letter)

    function fuzzyMatch (array, letters){
        let drivers = array.filter (driver =>{
            return driver.toLowerCase().startsWith(letters.toLowerCase()) 
        })
        debugger
        return drivers

    }

    function matchName(array, string){
        let drivers = array.filter (driver =>{
            return driver.name.toString().toLowerCase() == string.toLowerCase()
        })
        return drivers
    }