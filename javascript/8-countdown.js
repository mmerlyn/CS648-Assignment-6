let num = parseInt(prompt("Enter a number to count down from:"));

if (isNaN(num)) {
  console.log("Please enter a valid number.");
} else {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}
