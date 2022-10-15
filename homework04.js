const userName = prompt("Enter your name.");
const firstLetter = userName.slice(0,1);
const firstUppercase = firstLetter.toUpperCase();

const restOfTheName = userName.slice(1,userName.length);
const restOfTheNameLowercase = restOfTheName.toLowerCase();

alert(`Hello ${firstUppercase + restOfTheNameLowercase}!`);