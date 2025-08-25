let inpt = prompt("Enter your choice:").toLowerCase();
console.log("User: " + inpt);

let ran_int = Math.random();
let machine;

//Machine's result
if (ran_int < 0.35) machine = "rock";
else if (ran_int < 0.75) machine = "paper";
else machine = "scissor";

console.log("Machine: " + machine.charAt(0).toUpperCase() + machine.slice(1) + "!");

if (inpt === machine) {
  console.log("Equal!");
} else if (
  (inpt === "rock" && machine === "scissor") ||
  (inpt === "paper" && machine === "rock") ||
  (inpt === "scissor" && machine === "paper")
) {
  console.log("You WIN!");
} else {
  console.log("You LOSE!");
}
