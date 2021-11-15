class Player {
  constructor(name, token) {
  this.name = name;
  this.token = token;
  this.wins = 0;
  this.selection = null;
  }
  saveWinsToStorage() {
    var stringedWin = JSON.stringify(this);
    localStorage.setItem(`${this.name}`, stringedWin);
  }

  retrieveWinsFromStorage() {
    var storedWin = localStorage.getItem(`${this.name}`);
    var parsedWin = JSON.parse(storedWin);
    return parsedWin
    console.log(parsedWin)
  }
  humanTurn() {
    console.log("6")

    this.selection = event.target.id
  }
  robotTurn() {
    console.log("7")
    var classicChoices = ["rock", "paper", "scissors"];
    var difficultChoices =  ["rock", "paper", "scissors", "alien", "lizard"];
      if (currentGame.type === "classic") { this.selection = classicChoices[getRandomIndex(classicChoices)]
        displayCompChoice()
    } else if (currentGame.type === "difficult") {
      this.selection = difficultChoices[getRandomIndex(difficultChoices)]
      displayCompChoice()
    }
  }
}
