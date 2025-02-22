const name = prompt("Enter your name:");
const age = parseInt(prompt("Enter your age:"));
const currentYear = new Date().getFullYear();
const birthYear = currentYear - age;

console.log(`Hello ${name}, you were born in ${birthYear}.`);
