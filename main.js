var paper = document.getElementById("paper");
var rock = document.getElementById("rock");
var scissors = document.getElementById("scissors");
var classicIcons = document.getElementById("classicPlayerIcons");
var difficultIcons = document.getElementById("difficultPlayerIcons");
var classicGameBtn = document.getElementById("classicChoice");
var difficultGameBtn = document.getElementById("difficultChoice")
var changeGameBtn = document.getElementById("changeGameBtn");
var gameBoard = document.getElementById("gameBoard");


var currentGame = new Game();
var humanAvatar =  currentGame.humanPlayer;
var robotAvatar = currentGame.roboPlayer;
var computerChoice;
var userChoice;

// humanAvatar.takeTurn(rock)
// robotAvatar.takeTurn(scissors)

gameBoard.addEventListener("click", function()  {
  currentGame.chooseGame()
});



rock.addEventListener("click", function() {
  userChoice = rock.id;
  console.log(userChoice)
  scissors.classList.add("hidden");
  paper.classList.add("hidden");
  displayUserChoice()
  accessComputerChoice()
  currentGame.determineClassicWinner()
})

scissors.addEventListener("click", function() {
  userChoice = scissors.id;
  console.log(userChoice)
  rock.classList.add("hidden");
  paper.classList.add("hidden");
  displayUserChoice()
  accessComputerChoice()
  currentGame.determineClassicWinner()
});

paper.addEventListener("click", function() {
  userChoice = paper.id;
  scissors.classList.add("hidden");
  rock.classList.add("hidden");
  console.log(userChoice)
  displayUserChoice()
  accessComputerChoice()
  currentGame.determineClassicWinner()
})

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


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



function updateWins() {
  if (determineClassicWinner() === "User wins" ||     determineDifficultWinner() === "User wins") {
    playerOne.wins++;
    playerOne.saveWinsToStorage()
    var playerOneWins = playerOne.retrieveWinsFromStorage()
    "Wins:0 in  HTML".innerText = playerWins.wins
  } else if (determineClassicWinner() ===  "Computer wins" ||     determineDifficultWinner() === "Computer wins") {
    playerTwo.wins++;
    playerTwo.saveWinsToStorage()
    var  playerTwoWins = playerTwo.retrieveWinsFromStorage();
    "Wins:0 in  HTML".innerText = playerTwoWins.wins
  }
}

function playClassicGame() {
  classicGameBtn.classList.add("hidden");
  difficultGameBtn.classList.add("hidden");
  classicIcons.classList.remove("hidden");
  changeGameBtn.classList.remove("hidden");

  currentGame.determineClassicWinner()
}


function playDifficultGame() {
  classicGameBtn.classList.add("hidden");
  difficultGameBtn.classList.add("hidden");
  difficultIcons.classList.remove("hidden");
  changeGameBtn.classList.remove("hidden");

  currentGame.determineDifficultWinner();
}
