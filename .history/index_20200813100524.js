// Code your solution here
let findMatching = (drivers,driver) => {
    let lowerCased = driver.toLowerCase();
    let response = drivers.filter(n => {
        return (n === driver || n === lowerCased);
    });
    return response;
};

let fuzzyMatch = (drivers,driver) => {
    // if (driver.length>1) {
        let r = drivers.filter(d => {
            // debugger;
            return d.toLowerCase().indexOf(driver.toLowerCase()) === driver.length - 1;
        });
        debugger;
        return r;
    // } else {
    //     return [];
    // }
};

let matchName = (drivers,driver) => {
    
};