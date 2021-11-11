var paper = document.getElementById("paper");
var rock = document.getElementById("rock");
var scissors = document.getElementById("scissors");
var classicIcons = document.getElementById("classicPlayerIcons");
var classicChoice = document.getElementById("classicChoice");

var computerChoice;
var userChoice;

classicIcons.addEventListener("click", function(button) {
  var userChoice = button.id
  console.log(userChoice)
})

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function accessComputerChoice() {
  var choices = ["rock", "paper", "scissors"];
  computerChoice = choices[getRandomIndex(choices)]
  console.log(computerChoice)
}

function accessUserChoice(button) {
  var userChoice = classicIcons.id;
  console.log(userChoice)
}

// Game logic
// if (userChoice === computerChoice ) {
//   console.log("it's a draw")
// } else if (userChoice === "rock" && computerChoice === "scissors")  {
//   console.log("User wins")
// } else if (userChoice === "paper" && computerChoice === "rock") {
//    console.log("User  wins");
// } else if (userChoice === "scissors" && computerChoice === "paper") {
//    console.log("User wins")
// } else {
//    console.log("Computer wins")
// }
