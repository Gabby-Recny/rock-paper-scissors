var paper = document.getElementById("paper");
var rock = document.getElementById("rock");
var scissors = document.getElementById("scissors");
var alien = document.getElementById("alien");
var lizard = document.getElementById("lizard");
var classicIcons = document.getElementById("classicPlayerIcons");
var difficultIcons = document.getElementById("difficultPlayerIcons");
var classicGameBtn = document.getElementById("classicChoice");
var difficultGameBtn = document.getElementById("difficultChoice")
var changeGameBtn = document.getElementById("changeGameBtn");
var gameBoard = document.getElementById("gameBoard");
var fighterIcons = document.querySelectorAll(".fighterIcons");

var currentGame = new Game();
var human =  currentGame.humanPlayer;
var robot = currentGame.roboPlayer;


gameBoard.addEventListener("click", function()  {
  currentGame.chooseGame()
});


// for (var i = 0; i < fighterIcons.length; i++) {
//   fighterIcons[i].addEventListener("click", check)
// }

// function check() {
//   human.humanTurn()
//   console.log("human  turn", human.humanTurn())
//   console.log("human fighter:", this.selectedFighter)
//
//   var classicChoices = [rock, paper, scissors];
//   var difficultChoices =  ["rock", "paper", "scissors", "alien", "lizard"];
//   for (var i = 0; i < classicChoices.length; i++) {
//     if (human.selectedFighter !== human.humanTurn()) {
//       classicChoices[i].splice(i, 1)
//       console.log("hide")
//       hide(classicChoices[i])
//     }
//   }
//   // robot.robotTurn()
//   // currentGame.determineWinner()
// }

//Hide other icons
//Display computer icon
//Display human icon
//   scissors.classList.add("hidden");
//   rock.classList.add("hidden");
//   lizard.classList.add("hidden");
//   paper.classList.add("hidden");
//
//     human.humanTurn()
//     robot.robotTurn()
//     currentGame.determineWinner()
//
//If element !== event.target.// ID
//hidefunction

function displayCompChoice()  {
  gameBoard.innerHTML += `${robot.selectedFighter}`
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function show(elements) {
  for (var i =  0; i < elements.length; i++){
    elements[i].classList.remove("hidden");
  }
}

function hide(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("hidden");
  }
}

function updateWins() {
  if (determineWinner() === "User wins") {
    playerOne.wins++;
    playerOne.saveWinsToStorage()
    var playerOneWins = playerOne.retrieveWinsFromStorage()
    "Wins:0 in  HTML".innerText = playerWins.wins
  } else if (determineWinner() ===  "Computer wins") {
    playerTwo.wins++;
    playerTwo.saveWinsToStorage()
    var  playerTwoWins = playerTwo.retrieveWinsFromStorage();
    "Wins:0 in  HTML".innerText = playerTwoWins.wins
  }
}

function playClassicGame() {
  hide([classicGameBtn, difficultGameBtn]);
  show([classicIcons,changeGameBtn])
}


function playDifficultGame() {
  hide([classicGameBtn, difficultGameBtn]);
  show([classicIcons,changeGameBtn, difficultIcons])
}

function resetGame() {
  if (currentGame.gameType  === "classic") {
    console.log("reset")
    //Hiding the chosen icons
    //display game board
  } else {
    console.log("reset")
  }
}


rock.addEventListener("click", function() {
  hide([scissors,paper, lizard, alien])

    human.humanTurn()
    robot.robotTurn()
    currentGame.determineWinner()
})

scissors.addEventListener("click", function() {
  hide([rock, paper,  lizard,  alien])
    human.humanTurn()
    robot.robotTurn()
    displayCompChoice()
    currentGame.determineWinner()
})

paper.addEventListener("click", function() {
  hide([scissors, rock, lizard, alien])
    human.humanTurn()
    robot.robotTurn()
    displayCompChoice()
    currentGame.determineWinner()
})

alien.addEventListener("click", function() {
  hide([scissors, rock, lizard, paper])

    human.humanTurn()
    robot.robotTurn()
    displayCompChoice()
    currentGame.determineWinner()
})

lizard.addEventListener("click", function() {
  hide([scissors, rock, alien, paper])

    human.humanTurn()
    robot.robotTurn()
    displayCompChoice()
    currentGame.determineWinner()
})


function displayCompChoice() {
  if (robot.selectedFighter === "rock") {
    show([rock])
  } else if (robot.selectedFighter === "paper") {
    show([paper])
  } else if (robot.selectedFighter === "scissors") {
    show([scissors])
  } else if (robot.selectedFighter === "alien") {
    show([alien])
  } else if (robot.selectedFighter === "lizard") {
    show([lizard])
  } else if (determineWinner() === "it's a draw") {
    show([robot.selectedFighter, human.selectedFighter])
  }
}
