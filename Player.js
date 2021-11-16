class Player {
  constructor(name, token) {
  this.name = name;
  this.token = token;
  this.wins = this.retrieveWinsFromStorage() || 0;
  this.difficultChoices = ["rock", "paper", "scissors", "alien", "lizard"];
  this.selection = null;
  }
  saveWinsToStorage() {
      var stringedWin = JSON.stringify(this.wins);
      localStorage.setItem(`${this.name}`, stringedWin);
  }
  retrieveWinsFromStorage() {
    var storedWin = localStorage.getItem(`${this.name}`);
    var parsedWin = JSON.parse(storedWin);
    return parsedWin
  }
  humanTurn() {
    for (var i = 0; i < this.difficultChoices.length; i++) {
      if (event.target.closest("img").id === this.difficultChoices[i]) {
        this.selection = this.difficultChoices[i];
      }
    }
  }
  robotTurn() {
    var classicChoices = ["rock", "paper", "scissors"];
    var difficultChoices = ["rock", "paper", "scissors", "alien", "lizard"];
      if (currentGame.type === "classic") { this.selection = classicChoices[getRandomIndex(classicChoices)]
    } else if (currentGame.type === "difficult") {
      this.selection = difficultChoices[getRandomIndex(difficultChoices)]
    }
  }
}
