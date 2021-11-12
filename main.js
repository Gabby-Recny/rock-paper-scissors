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

classicChoiceBtn.addEventListener("click", selectClassicGame)


rock.addEventListener("click", function() {
  userChoice = rock.id;
  console.log(userChoice)
  scissors.classList.add("hidden");
  paper.classList.add("hidden");
  displayUserChoice()
  accessComputerChoice()
  game.determineClassicWinner()
})

scissors.addEventListener("click", function() {
  userChoice = scissors.id;
  console.log(userChoice)
  rock.classList.add("hidden");
  paper.classList.add("hidden");
  displayUserChoice()
  accessComputerChoice()
  game.determineClassicWinner()
});

paper.addEventListener("click", function() {
  userChoice = paper.id;
  scissors.classList.add("hidden");
  rock.classList.add("hidden");
  console.log(userChoice)
  displayUserChoice()
  accessComputerChoice()
  game.determineClassicWinner()
})



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
  displayComputerChoice()
}

function displayComputerChoice() {
  if (computerChoice === "rock") {
    classicIcons.innerHTML += `
    ${rock}`
  } else if (computerChoice === "paper") {
    classicIcons.innerHTML += `
    ${paper}`
  }  else if (computerChoice === "scissors") {
    classicIcons.innerHTML += `
    ${scissors}`
  }
}

function displayUserChoice() {
  if (userChoice === "rock") {
    classicIcons.innerHTML += `
    ${rock}`
  } else if (userChoice === "paper") {
    classicIcons.innerHTML += `
    ${paper}`
  }  else if (userChoice === "scissors") {
    classicIcons.innerHTML += `
    ${scissors}`
  }
}



function selectClassicGame() {
  classicChoiceBtn.classList.add("hidden");
  difficultChoiceBtn.classList.add("hidden");
  classicIcons.classList.remove("hidden");
  changeGameBtn.classList.remove("hidden");
}



function updateWins() {
  if (determineClassicWinner() === "User wins" ||     determineDifficultWinner() === "User wins") {
    playerOne.wins++;
    playerOne.saveWinsToStorage()
    var playerOneWins = playerOne.retrieveWinsFromStorage()
    "Wins:0 in  HTML".innerText = playerWins.wins
  } else if (determineClassicWinner() ===  "Computer wins" ||     determineDifficultWinner() === "User wins") {
    playerTwo.wins++;
    playerTwo.saveWinsToStorage()
    var  playerTwoWins = playerTwo.retrieveWinsFromStorage();
    "Wins:0 in  HTML".innerText = playerTwoWins.wins

  }
}
