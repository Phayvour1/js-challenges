const num = parseInt(prompt("Enter a number for the multiplication table:"));

for (let i = 1; i <= 12; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}
