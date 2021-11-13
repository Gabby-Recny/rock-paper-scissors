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
  humanTurn() {
    this.selectedFighter = event.target.id
    console.log("human fighter",  human.selectedFighter)
  }
  robotTurn() {
    var classicChoices = ["rock", "paper", "scissors"];
    var difficultChoices =  ["rock", "paper", "scissors", "alien", "lizard"];

      if (currentGame.gameType === "classic") { this.selectedFighter = classicChoices[getRandomIndex(classicChoices)]
      console.log("robot classic:", this.selectedFighter)
    } else if (currentGame.gameType === "difficult") {
      this.selectedFighter = difficultChoices[getRandomIndex(difficultChoices)]
      console.log("robot difficult:", this.selectedFighter)
    }
  }
}
