
//v1
let age = prompt("Enter your age");

if (age >= 14 && age <= 90) {
     console.log(true);
  } else {
  console.log(false);
  }

//v2


function yourAge (age) {
  if (age >= 14 && age <= 90) {
     return true;
} else {
  return false;
}
}
  yourAge(12);