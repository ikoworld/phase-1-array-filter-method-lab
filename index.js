// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

const findMatching = function (drivers, name) {
  return drivers.filter(driverName => driverName.toLowerCase() === name.toLowerCase());
};

console.log(findMatching(drivers, "Bobby"));
console.log(findMatching(drivers, "Sammy"));

const fuzzyMatch = function (drivers, string) {
  return drivers.filter(driverName => driverName.slice(0, 2) === string);
};

console.log(fuzzyMatch(drivers, "Sa"));
console.log(fuzzyMatch(drivers, "y"));
console.log(fuzzyMatch(drivers, "mm"));

function matchName(drivers, Name) {
  return drivers.filter(element => element.name === Name);
}

const driverObjects = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh'
  },
  {
    name: 'Sammy',
    hometown: 'New York'
  },
  {
    name: 'Sally',
    hometown: 'Cleveland'
  },
  {
    name: 'Annette',
    hometown: 'Los Angeles'
  },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay'
  }
];

console.log(matchName(driverObjects, "Bobby"));
