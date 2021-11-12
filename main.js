var paper = document.getElementById("paper");
var rock = document.getElementById("rock");
var scissors = document.getElementById("scissors");
var classicIcons = document.getElementById("classicPlayerIcons");
var classicChoiceBtn = document.getElementById("classicChoice");
var difficultChoiceBtn = document.getElementById("difficultChoice")
var changeGameBtn = document.getElementById("changeGameBtn")

var computerChoice;
var userChoice;
// var game = new Game(gameType);
var game = new Game();

var humanPlayer = new Player ("human", "smiley  face", "fox");
var computerPlayer = new Player ("computer",  "laptop", "macBookPro");

rock.addEventListener("click", function() {
  userChoice = rock.id;
  console.log(userChoice)
  accessComputerChoice()
  game.determineClassicWinner()
})

scissors.addEventListener("click", function() {
  userChoice = scissors.id;
  console.log(userChoice)
  accessComputerChoice()
  game.determineClassicWinner()
});

paper.addEventListener("click", function() {
  userChoice = paper.id;
  console.log(userChoice)
  accessComputerChoice()
  game.determineClassicWinner()
})

classicChoiceBtn.addEventListener("click", selectClassicGame)


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


// function chooseGame() {
//   if (classicGame === selected) {
//     game.gameType = Classic
//   }
// }


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



function updateWins() {
  if (determineClassicWinner() === "User wins") {
    playerOne.wins++;
    playerOne.saveWinsToStorage()
    var playerWins = playerOne.retrieveWinsFromStorage()
    "h5/winsHTML".innerText = playerWins.wins

  }
}
