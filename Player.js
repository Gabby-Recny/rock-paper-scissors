class Player {
  constructor(name, token) {
  this.name = name;
  this.token = token;
  this.wins = 0;
  this.selection = null;
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
    this.selection = event.target.id
    console.log("human selection",  human.selection)
  }
  robotTurn() {
      if (currentGame.type === "classic") { this.selection = currentGame.rpsChoices[getRandomIndex(currentGame.rpsChoices)]
      console.log("robot classic:", this.selection)
    } else if (currentGame.type === "difficult") {
      this.selection = currentGame.diffChoices[getRandomIndex(currentGame.diffChoices)]
      console.log("robot difficult:", this.selection)
    }
  }
}
