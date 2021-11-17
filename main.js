var paper = document.getElementById("paper");
var rock = document.getElementById("rock");
var scissors = document.getElementById("scissors");
var alien = document.getElementById("alien");
var lizard = document.getElementById("lizard");
var humanWins = document.getElementById("humanWins");
var compWins = document.getElementById("compWins");
var subTitle = document.getElementById("subTitle");
var classicIcons = document.getElementById("classicPlayerIcons");
var difficultIcons = document.getElementById("difficultPlayerIcons");
var classicGameBtn = document.getElementById("classicChoice");
var difficultGameBtn = document.getElementById("difficultChoice")
var changeGameBtn = document.getElementById("changeGameBtn");
var gameBoard = document.getElementById("gameBoard");
var drawArea = document.getElementById("drawArea")

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
window.addEventListener("load", displayPrevWins)

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


function showIt(element) {
  var icon = element.toString();
  var newIcon = document.getElementById(icon);
  newIcon.classList.remove("hidden");
}

//Hide and Display  Home Page
function hideHomePage() {
  hide([classicGameBtn, difficultGameBtn]);
}

function showHomePage() {
  subTitle.innerText = "Choose Your Game"
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
  displayCompChoice()
  currentGame.determineWinner()
  displayWins()
  displayAnnoucement()
  setTimeout(resetGame, 1000)
}

function displayCompChoice() {
  showIt([robot.selection])
}

function displayWins() {
  if (!localStorage.Human) {
    humanWins.innerText = 0;
  } else {
    humanWins.innerText = human.retrieveWinsFromStorage()
  }
  if (!localStorage.Computer) {
    compWins.innerText = 0;
  } else {
  compWins.innerText = robot.retrieveWinsFromStorage()
  }
}

function displayAnnoucement() {
  if (currentGame.winner === "Human" ) {
    subTitle.innerText =  `😸 Kitty wins! 😸`
  } else if (currentGame.winner === "Computer") {
    subTitle.innerText =  `💻 Computer wins! 💻`
  }  else {
    subTitle.innerText =  `It's a tie!`
    displayDraw(human.selection)
  }
}

function displayDraw(selectedIcon) {
  if (currentGame.isDraw) {
  show([drawArea])
  drawArea.innerHTML += `<button class="player-buttons">
    <img src="assets/${selectedIcon}.png" alt="${selectedIcon}" id=${selectedIcon}>
  </button>`
  }
}

function resetDraw() {
    hide([drawArea])
    drawArea.innerHTML = ""
    currentGame.isDraw = false;
}

function resetGame() {
  resetDraw()
  show([changeGameBtn])
  if (currentGame.type === "classic") {
    displayClassic()
  } else {
    displayDiff()
  }
}

//Page Refresh
function displayPrevWins() {
  currentGame = new Game();
  human = currentGame.humanPlayer;
  robot = currentGame.roboPlayer;
  displayWins()
  subTitle.innerText = "Choose Your Game"
}

//Select Icons
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
