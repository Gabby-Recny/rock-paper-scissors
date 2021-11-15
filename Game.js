class Game {
  constructor() {
    this.hasWinner = null;
    this.isDraw = false;
    this.type = null;
    this.humanPlayer = new Player("Human", "Face");
    this.roboPlayer = new Player("Computer", "Laptop");
  }
  determineDraw() {
    if (this.humanPlayer.selection === this.roboPlayer.selection) {
      this.isDraw = true;
      this.hasWinner = false;
      displayDraw(this.humanPlayer.selection)
    } else {
      this.determineWinner()
    }
    setTimeout(resetGame, 500)
  }
  determineWinner() {
    if (this.humanPlayer.selection === "rock" && (this.roboPlayer.selection === "scissors" || this.roboPlayer.selection === "lizard")) {
      this.hasWinner = true;
      this.updateWins(human)
    } else if (this.humanPlayer.selection === "paper" && (this.roboPlayer.selection === "rock" || this.roboPlayer.selection === "alien")) {
      this.hasWinner = true;
      this.updateWins(human)
    } else if (this.humanPlayer.selection === "scissors" && (this.roboPlayer.selection === "paper" || this.roboPlayer.selection === "lizard")) {
      this.hasWinner = true;
      this.updateWins(human)
    } else if (this.humanPlayer.selection === "lizard" && (this.roboPlayer.selection === "paper" || this.roboPlayer.selection === "alien")) {
      this.hasWinner = true;
      this.updateWins(human)
    } else if (this.humanPlayer.selection === "alien" && (this.roboPlayer.selection === "scissors" || this.roboPlayer.selection === "rock")) {
      this.hasWinner = true;
      this.updateWins(human)
    } else {
      this.hasWinner = true;
      this.updateWins(robot)
    }
  }
  updateWins(player) {
    if (this.hasWinner) {
    player.wins++
    player.saveWinsToStorage()
    var playerWins = player.retrieveWinsFromStorage()
    }
  }
}
