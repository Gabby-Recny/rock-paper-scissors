var paper = document.getElementById("paper");
var rock = document.getElementById("rock");
var scissors = document.getElementById("scissors");
var classicIcons = document.getElementById("classicPlayerIcons");
var classicChoiceBtn = document.getElementById("classicChoice");
var difficultChoiceBtn = document.getElementById("difficultChoice")
var changeGameBtn = document.getElementById("changeGameBtn")

var computerChoice;
var userChoice;

classicChoiceBtn.addEventListener("click", selectClassicGame)

rock.addEventListener("click", function() {
  userChoice = rock.id;
  console.log(userChoice)
  accessComputerChoice()
  determineClassicWinner()
})

scissors.addEventListener("click", function() {
  userChoice = scissors.id;
  console.log(userChoice)
  accessComputerChoice()
  determineClassicWinner()
});

paper.addEventListener("click", function() {
  userChoice = paper.id;
  console.log(userChoice)
  accessComputerChoice()
  determineClassicWinner()
})


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


function accessComputerChoice() {
  var choices = ["rock", "paper", "scissors"];
  computerChoice = choices[getRandomIndex(choices)]
  console.log(computerChoice)
}


function selectClassicGame() {
  classicChoiceBtn.classList.add("hidden");
  difficultChoiceBtn.classList.add("hidden");
  classicIcons.classList.remove("hidden");
  changeGameBtn.classList.remove("hidden");
}

function determineClassicWinner() {
  if (userChoice === computerChoice ) {
    console.log("it's a draw")
  } else if (userChoice === "rock" && computerChoice === "scissors")  {
    console.log("User wins")
  } else if (userChoice === "paper" && computerChoice === "rock") {
     console.log("User  wins");
  } else if (userChoice === "scissors" && computerChoice === "paper") {
     console.log("User wins")
  } else {
     console.log("Computer wins")
  }
}
