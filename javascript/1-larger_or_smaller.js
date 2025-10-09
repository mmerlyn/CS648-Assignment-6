let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));

if (isNaN(num1) || isNaN(num2)) {
  document.write("Please enter valid numbers.");
} else if (num1 > num2) {
  document.write(`${num1} is larger than ${num2}.`);
} else if (num2 > num1) {
  document.write(`${num2} is larger than ${num1}.`);
} else {
  document.write(`Both numbers are equal: ${num1}.`);
}
