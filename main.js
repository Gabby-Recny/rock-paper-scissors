var paper = document.getElementById("paper");
var rock = document.getElementById("rock");
var scissors = document.getElementById("scissors");
var alien = document.getElementById("alien");
var lizard = document.getElementById("lizard");
var humanWins = document.getElementById("humanWins");
var compWins = document.getElementById("compWins");
var subTitle = document.querySelector("h4");
var classicIcons = document.getElementById("classicPlayerIcons");
var difficultIcons = document.getElementById("difficultPlayerIcons");
var classicGameBtn = document.getElementById("classicChoice");
var difficultGameBtn = document.getElementById("difficultChoice")
var changeGameBtn = document.getElementById("changeGameBtn");
var gameBoard = document.getElementById("gameBoard");
var selectionIcons = document.querySelectorAll("selectionIcons")

var currentGame;
var human;
var robot;

gameBoard.addEventListener("click", function()  {
  currentGame.chooseGame()
});
changeGameBtn.addEventListener("click", showHomePage)

//Does not work  on new Game instation after first game determined
window.addEventListener("load", function() {
  currentGame = new Game();
  human = currentGame.humanPlayer;
  robot = currentGame.roboPlayer;
  var humanRetrieve = human.retrieveWinsFromStorage()
  var roboRetrieve = robot.retrieveWinsFromStorage()
  displayWins(humanRetrieve)
  displayWins(roboRetrieve)
  console.log("1")
  subTitle.innerText = "Welcome to the Jungle"
})

//General Functions
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

function showIt(arrayOfStrings) {
  for (var i = 0; i < arrayOfStrings.length; i++) {
    var element = document.getElementById(arrayOfStrings[i]);
    element.classList.remove("hidden");
  }
}

//Hide and Display  Home Page

function hideHomePage() {
  hide([classicGameBtn, difficultGameBtn]);
  console.log("3")
}

function showHomePage() {
  subTitle.innerText = "Welcome to the Jungle"
  show([classicGameBtn, difficultGameBtn]);
  hide([classicIcons, difficultIcons, changeGameBtn]);
}


//Play Game
function displayGame() {
  if (currentGame.type === "classic") {
    console.log("4 Classic")
    subTitle.innerText = "Pick Your Fighter!"
    show([classicIcons, rock, paper, scissors])
  } else {
    console.log("4 Difficult")
    subTitle.innerText = "Pick Your Fighter!"
    show([classicIcons, difficultIcons, rock, paper, scissors, alien, lizard]);
  }
}

function playGame() {
  human.humanTurn()
  robot.robotTurn()
  currentGame.determineWinner()
}

function displayCompChoice() {
  showIt([robot.selection])
}

function updateWins(player) {
  player.wins++
  player.saveWinsToStorage()
  var playerWins = player.retrieveWinsFromStorage()
  displayWins(playerWins)
}

function displayWins(player) {
  if (player.name === "Human") {
    humanWins.innerText = player.wins;
    subTitle.innerText = "User wins!"
  } else if (player.name === "Computer") {
    compWins.innerText = player.wins;
    subTitle.innerText = "Computer wins!"
  }
}

function displayDraw() {
  subTitle.innerText = "It's a draw!"
}

function resetGame() {
  console.log("9")
  show([changeGameBtn])
  displayGame()
}

//Icons
scissors.addEventListener("click", function() {
  console.log("5")
  hide[(rock, paper, lizard, alien)]
  playGame()
})

paper.addEventListener("click", function() {
  console.log("5")
  hide([scissors, rock, lizard, alien])
  playGame()
})

alien.addEventListener("click", function() {
  console.log("5")
  hide([scissors, rock, lizard, paper])
  playGame()
})

lizard.addEventListener("click", function() {
  console.log("5")
  hide([scissors, rock, alien, paper]);
  playGame()
})


rock.addEventListener("click", function() {
  console.log("5")
  hide([scissors, paper, lizard, alien]);
  playGame()
})
