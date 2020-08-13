// Code your solution here
let findMatching = (drivers,driver) => {
    let lowerCased = driver.toLowerCase();
    let response = drivers.filter(n => {
        return (n === driver || n === lowerCased);
    });
    return response;
};

let fuzzyMatch = (drivers,driver) => {
    return drivers.filter(d => {
        return d.toLowerCase().indexOf(driver.toLowerCase()) !== -1 && d.toLowerCase().indexOf(driver.toLowerCase()) < driver.length;
    });
};

let matchName = (drivers,driver) => {
    return drivers.filter(d => {return d.name === driver});
};