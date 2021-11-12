class Player {
  constructor(name, token, id) {
  this.name = name;
  this.token = token;
  this.id = id;
  this.wins = 0;
  this.selectedFighter =  null;
  }
  saveWinsToStorage() {
    var stringedWin = JSON.stringify(this);
    localStorage.setItem(`${this.id}`, stringedWin);
  }

  retrieveWinsFromStorage() {
    var storedWin = localStorage.getItem(`${this.id}`);
    var parsedWin = JSON.parse(storedWin);
  }
  takeTurn(fighter) {
    var classicChoices = ["rock", "paper", "scissors"];
    var difficultChoices =  ["rock", "paper", "scissors", "alien", "lizard"];

    if (this.name === "Human") {
    //How  to make sure event.target.id is  an icon
      this.selectedFighter = event.target.id;
    } else if (this.name === "Computer" &&  game.gameType === "classic") {
      this.selectedFighter = classicChoices[getRandomIndex(classicChoices)]
    } else if (this.name === "Computer" &&  game.gameType === "difficult") {
      this.selectedFighter = difficultChoices[getRandomIndex(difficultChoices)]
    }
  }
}
