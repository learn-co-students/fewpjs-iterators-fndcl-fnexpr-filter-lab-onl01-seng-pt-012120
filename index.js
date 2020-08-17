function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase().slice(0, name.length) === name.toLowerCase());
}

function matchName(drivers, string) {
  return drivers.filter(driver => driver.name === string);
}