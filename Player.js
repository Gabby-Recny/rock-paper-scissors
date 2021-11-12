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
    this.selectedFighter = fighter;
  }
}
