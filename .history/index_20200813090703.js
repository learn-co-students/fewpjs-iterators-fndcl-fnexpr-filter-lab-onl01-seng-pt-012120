// Code your solution here
let findMatching = (drivers,driver) => {
    let lowerCased = driver.toLowerCase();
    let response = drivers.filter(n => {
        return (n === driver || n === lowerCased);
    });
    return response;
};

let fuzzyMatch = (drivers,driver) => {

};

let matchName = (drivers,driver) => {
    
};