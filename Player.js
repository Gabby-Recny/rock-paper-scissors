class Player {
  constructor(name, token, id) {
  this.name = name;
  this.token = token;
  this.id = id;
  this.wins = 0;
  this.selectedFighter = null;
  }
  saveWinsToStorage() {
    var stringedWin = JSON.stringify(this);
    localStorage.setItem(`${this.id}`, stringedWin);
  }

  retrieveWinsFromStorage() {
    var storedWin = localStorage.getItem(`${this.id}`);
    var parsedWin = JSON.parse(storedWin);
  }
  //How to assign the fighter to selected  element
  takeTurn() {
    var classicChoices = ["rock", "paper", "scissors"];
    var difficultChoices =  ["rock", "paper", "scissors", "alien", "lizard"];

    this.selectedFighter = event.target.id
    console.log(this.selectedFighter)
    // if (this.name === "Human") {
    // How  to make sure event.target.id is an icon
    // Human is being assigned to classicChoice
    //   this.selectedFighter = event.target.id;
    //   console.log("event", event.target.id)
    //   console.log("human fighter", this.selectedFighter)
    // } else if (this.name === "Computer" &&  currentGame.gameType === "classic") {
    //   this.selectedFighter = classicChoices[getRandomIndex(classicChoices)]
    //   console.log("Computer fighter", this.selectedFighter)
    // } else if (this.name === "Computer" &&  currentGame.gameType === "difficult") {
    //   this.selectedFighter = difficultChoices[getRandomIndex(difficultChoices)]
    // }
  }
  robotTurn() {
    var classicChoices = ["rock", "paper", "scissors"];
    var difficultChoices =  ["rock", "paper", "scissors", "alien", "lizard"];

    this.selectedFighter = classicChoices[getRandomIndex(classicChoices)]
    console.log("robot", this.selectedFighter)
  }
}
