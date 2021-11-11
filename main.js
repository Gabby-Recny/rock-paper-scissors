var paper = document.getElementById("paper");
var rock = document.getElementById("rock");
var scissors = document.getElementById("scissors");
var classicIcons = document.getElementById("classicPlayerIcons");
var classicChoice = document.getElementById("classicChoice");

var computerChoice;
var userChoice;

classicChoice.addEventListener("click", playGame)

rock.addEventListener("click", function() {
  userChoice = rock.id;
  console.log(userChoice)
})

scissors.addEventListener("click", function() {
  userChoice = scissors.id;
  console.log(userChoice)
});

paper.addEventListener("click", function() {
  userChoice = paper.id;
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
accessComputerChoice();


// classicIcons.addEventListener("click", function() {
//   accessUserChoise(event)
// })
// function accessUserChoise(event) {
//   if (event.target.id === "scissors") {
//     userChoice = scissors.id;
//     console.log(userChoice)
//   } else if (event.target.id === "rock") {
//     userChoice = rock.id;
//     console.log(userChoice)
//   } else if (event.target.id === "paper") {
//       userChoice = paper.id;
//       console.log(userChoice)
//   }
// }
