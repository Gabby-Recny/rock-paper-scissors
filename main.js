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
var selectionIcons = document.querySelectorAll("selectionIcons")

var currentGame = new Game();
var human =  currentGame.humanPlayer;
var robot = currentGame.roboPlayer;

gameBoard.addEventListener("click", function()  {
  currentGame.chooseGame()
});
changeGameBtn.addEventListener("click", showHomePage)
classicIcons.addEventListener("click", selectIcon)


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

function hideArray(arrayOfStrings) {
  for (var i = 0; i < arrayOfStrings.length; i++) {
    var element = document.getElementById(arrayOfStrings[i]);
    element.classList.add("hidden");
  }
}

function displayArray(arrayOfStrings) {
  for (var i = 0; i < arrayOfStrings.length; i++) {
    var element = document.getElementById(arrayOfStrings[i]);
    element.classList.remove("hidden");
  }
}


//Hide and display home page
function hideHomePage() {
  console.log("2")
  hide([classicGameBtn, difficultGameBtn]);
  // show([classicIcons,changeGameBtn]);
}

function showHomePage() {
  show([classicGameBtn, difficultGameBtn]);
  hide([classicIcons, difficultIcons, changeGameBtn]);
}

//Hide  and display game board
function displayClassic() {
  console.log("4")
  show([classicIcons])
}

function displayDifficult() {
  console.log("4")
  show([classicIcons, difficultIcons])
}


//Main Game
function playGame() {
  console.log("3")
  if (currentGame.type === "classic") {
    displayClassic()
  } else {
    displayDifficult();
  }
}

function selectIcon(event) {
var selection = event.target.closest("img").id;
console.log("5")
  human.humanTurn()
  hideIcons(human.selection)
  robot.robotTurn()
  displayCompChoice()
  currentGame.determineDraw()
}


function displayCompChoice() {
    displayArray([robot.selection])
}

function hideIcons() {
  currentGame.diffChoices.splice(human.selection, 1);
  hideArray(currentGame.diffChoices)
  console.log("5.2")
}



function updateWins() {
  if (determineWinner() === "User wins") {
    human.wins++;
    human.saveWinsToStorage()
    var playerOneWins = human.retrieveWinsFromStorage()
    "Wins:0 in  HTML".innerText = playerOneWins
  } else if (determineWinner() ===  "Computer wins") {
    robot.wins++;
    robot.saveWinsToStorage()
    var  playerTwoWins = robot.retrieveWinsFromStorage();
    "Wins:0 in  HTML".innerText = playerTwoWins
  }
}

function resetGame() {
  show([changeGameBtn])
  if (currentGame.type  === "classic") {
    console.log("6")
    hide([rock, paper, scissors])
    displayClassic()
  } else {
    console.log("reset difficult")
    hide([rock, paper, scissors, lizard, alien])
    displayDifficult()
  }
}
