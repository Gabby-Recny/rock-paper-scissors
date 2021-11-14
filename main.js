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

function hideHomePage() {
  hide([classicGameBtn, difficultGameBtn]);
  show([classicIcons,changeGameBtn]);
}

function showHomePage() {
  show([classicGameBtn, difficultGameBtn]);
  hide([classicIcons, difficultIcons, changeGameBtn]);
}

function playGame() {
  if (currentGame.type === "classic") {
    displayClassic()
  } else {
    displayDifficult();
  }
}

function displayClassic() {
var classicChoices = ["rock", "paper", "scissors"];
  console.log("AMC at 10")
  showIt(classicChoices)
}

function displayDifficult() {
  show([classicIcons, difficultIcons])
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
    console.log("reset classic")
    hide([rock, paper, scissors])
    displayClassic()
  } else {
    console.log("reset difficult")
    hide([classicIcons, difficultIcons])
    displayDifficult()
  }
}

function displayCompChoice() {
    showIt([robot.selection])
}

function hide(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("hidden");
  }
}


function hideIt(arrayOfStrings) {
  for (var i = 0; i < arrayOfStrings.length; i++) {
    var element = document.getElementById(arrayOfStrings[i]);
    element.classList.add("hidden");
  }
}

function showIt(arrayOfStrings) {
  for (var i = 0; i < arrayOfStrings.length; i++) {
    var element = document.getElementById(arrayOfStrings[i]);
    element.classList.remove("hidden");
  }
}


function selectIcon(event) {
var selection = event.target.closest("img").id;
console.log("selection: ", selection)
  human.humanTurn()
  hideIcons(human.selection)
  robot.robotTurn()
  displayCompChoice()
  currentGame.determineDraw()
  currentGame.determineWinner()
}

function hideIcons() {
  var difficultChoices =  ["rock", "paper", "scissors", "alien", "lizard"]
  difficultChoices.splice(human.selection, 1);
  hideIt(difficultChoices)
}
