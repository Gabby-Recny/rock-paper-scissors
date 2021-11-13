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
var human =  currentGame.humanPlayer;
var robot = currentGame.roboPlayer;


gameBoard.addEventListener("click", function()  {
  currentGame.chooseGame()
});


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
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
  console.log("We're playing the classic game")
  classicGameBtn.classList.add("hidden");
  difficultGameBtn.classList.add("hidden");
  classicIcons.classList.remove("hidden");
  changeGameBtn.classList.remove("hidden");
}


function playDifficultGame() {
  classicGameBtn.classList.add("hidden");
  difficultGameBtn.classList.add("hidden");
  difficultIcons.classList.remove("hidden");
  changeGameBtn.classList.remove("hidden");

  robot.takeTurn()
  currentGame.determineDifficultWinner();
}




//human fighter is being assigned to Classic game
//Robot fighter  is not being assigned




rock.addEventListener("click", function() {
  human.takeTurn()
  robot.robotTurn()
  scissors.classList.add("hidden");
  paper.classList.add("hidden");

  currentGame.determineClassicWinner()
})

scissors.addEventListener("click", function() {
  human.takeTurn()
  robot.robotTurn()
  rock.classList.add("hidden");
  paper.classList.add("hidden");

  currentGame.determineClassicWinner()
})

paper.addEventListener("click", function() {
  human.takeTurn()
  robot.robotTurn()
  scissors.classList.add("hidden");
  rock.classList.add("hidden");

  currentGame.determineClassicWinner()
})
