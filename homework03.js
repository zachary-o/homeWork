const userName = prompt("Enter your name.");

const userNameLowercase = `${userName.slice(0,1).toLowerCase() + userName.slice(1)}`;

alert(userNameLowercase);