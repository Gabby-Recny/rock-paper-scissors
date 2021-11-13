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
var  fighterIcons = document.querySelectorAll(".fighterIcons");

var currentGame = new Game();
var human =  currentGame.humanPlayer;
var robot = currentGame.roboPlayer;


gameBoard.addEventListener("click", function()  {
  currentGame.chooseGame()
});


for (var i = 0; i < fighterIcons.length; i++) {
  fighterIcons[i].addEventListener("click", check)
}

function check() {
  console.log("HERE")
  // fighterIcons.classList.add("hidden")
  gameBoard.innerHTML +=  `${human.selectedFighter}`

  human.humanTurn()
  robot.robotTurn()
  currentGame.determineWinner()
}

//Hide other icons
//Display computer icon
//Display human icon

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





// rock.addEventListener("click", function() {
//   scissors.classList.add("hidden");
//   paper.classList.add("hidden");
//   lizard.classList.add("hidden");
//   alien.classList.add("hidden");
//
//     human.humanTurn()
//     robot.robotTurn()
//     currentGame.determineWinner()
// })
//
// scissors.addEventListener("click", function() {
//   rock.classList.add("hidden");
//   paper.classList.add("hidden");
//   lizard.classList.add("hidden");
//   alien.classList.add("hidden");
//
//     human.humanTurn()
//     robot.robotTurn()
//     currentGame.determineWinner()
// })
//
// paper.addEventListener("click", function() {
//   scissors.classList.add("hidden");
//   rock.classList.add("hidden");
//   lizard.classList.add("hidden");
//   alien.classList.add("hidden");
//
//     human.humanTurn()
//     robot.robotTurn()
//     currentGame.determineWinner()
// })
//
// alien.addEventListener("click", function() {
//   scissors.classList.add("hidden");
//   rock.classList.add("hidden");
//   lizard.classList.add("hidden");
//   paper.classList.add("hidden");
//
//     human.humanTurn()
//     robot.robotTurn()
//     currentGame.determineWinner()
// })
//
// lizard.addEventListener("click", function() {
//   scissors.classList.add("hidden");
//   rock.classList.add("hidden");
//   alien.classList.add("hidden");
//   paper.classList.add("hidden");
//
//     human.humanTurn()
//     robot.robotTurn()
//     currentGame.determineWinner()
// })
