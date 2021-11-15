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

var currentGame;
var human;
var robot;

classicGameBtn.addEventListener("click", displayClassic)
difficultGameBtn.addEventListener("click", displayDiff)
changeGameBtn.addEventListener("click", showHomePage)
alien.addEventListener("click", selectAlien)
paper.addEventListener("click", selectPaper)
scissors.addEventListener("click", selectScissors)
lizard.addEventListener("click", selectLizard)
rock.addEventListener("click", selectRock)

//Does not work  on new Game instation after first game determined
window.addEventListener("load", displayPrevWins())

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
}

function showHomePage() {
  subTitle.innerText = "Welcome to the Jungle"
  show([classicGameBtn, difficultGameBtn]);
  hide([classicIcons, difficultIcons, changeGameBtn]);
}

//Main Game
function displayClassic() {
  hideHomePage()
  currentGame.type = "classic";
  subTitle.innerText = "Pick Your Fighter!"
  show([classicIcons, rock, paper, scissors])
}

function displayDiff() {
  hideHomePage()
  currentGame.type = "difficult"
  subTitle.innerText = "Pick Your Fighter!"
  show([classicIcons, difficultIcons, rock, paper, scissors, alien, lizard]);
}

function playGame() {
  human.humanTurn()
  robot.robotTurn()
  currentGame.determineDraw()
  displayWins()
}

function displayCompChoice() {
  showIt([robot.selection])
}

function displayWins() {
  humanWins.innerText = human.retrieveWinsFromStorage()
  compWins.innerText = robot.retrieveWinsFromStorage()
}

function displayDraw(selectedIcon) {
  subTitle.innerText = "It's a draw!"
  gameBoard.innerHTML += `<button class="player-icons">
    <img src="assets/${selectedIcon}.png" alt="${selectedIcon}" id=${selectedIcon}>
  </button>`
}

function resetGame() {
  console.log("9")
  show([changeGameBtn])
  if (currentGame.type === "classic") {
    displayClassic()
  } else {
    displayDiff()
  }
}


//Refresh
function displayPrevWins() {
  currentGame = new Game();
  human = currentGame.humanPlayer;
  robot = currentGame.roboPlayer;
  displayWins()
  displayWins()
  subTitle.innerText = "Welcome to the Jungle"
}

//Select Icons
function selectRock() {
  hide[(rock, paper, lizard, alien)]
  playGame()
}

function selectPaper() {
  hide([scissors, rock, lizard, alien])
  playGame()
}

function selectAlien() {
  hide([scissors, rock, lizard, paper])
  playGame()
}

function selectLizard() {
  hide([scissors, rock, alien, paper]);
  playGame()
}

function selectRock() {
  hide([scissors, paper, lizard, alien]);
  playGame()
}
function selectScissors() {
  hide([ paper, lizard, alien, rock])
  playGame()
}
