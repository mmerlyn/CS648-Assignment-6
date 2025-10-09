let coinFlip = Math.floor(Math.random() * 2);

let choice = prompt("Heads or Tails?").toLowerCase();

let result = (coinFlip === 0) ? "heads" : "tails";

if (result === "heads" && choice === "heads") {
  alert("The flip was heads and you chose heads...you win!");
} else if (result === "heads" && choice === "tails") {
  alert("The flip was heads but you chose tails...you lose!");
} else if (result === "tails" && choice === "heads") {
  alert("The flip was tails but you chose heads...you lose!");
} else if (result === "tails" && choice === "tails") {
  alert("The flip was tails and you chose tails...you win!");
} else {
  alert("Invalid input. Please refresh and choose 'Heads' or 'Tails'.");
}
