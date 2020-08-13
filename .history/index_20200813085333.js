// Code your solution here
let findMatching = (drivers,driver) => {
    let response = drivers.filter(n => {
        n === driver || n == driver;
    });
    return response;
};

let fuzzyMatch = (drivers,driver) => {

};

let matchName = (drivers,driver) => {
    
};