class Game {
  constructor() {
    this.winner = null;
    this.isDraw = false;
    this.type = null;
    this.humanPlayer = new Player("Human", "👩‍💻");
    this.roboPlayer = new Player("Computer", "💻");
  }
  determineWinner() {
    console.log("human:  ", this.humanPlayer.selection)
    console.log("computer: ", this.roboPlayer.selection)
    if (this.humanPlayer.selection === this.roboPlayer.selection) {
      this.winner = null;
      this.isDraw = true;
      console.log("Draw: ", this.isDraw)
    } else if (this.humanPlayer.selection === "rock" && (this.roboPlayer.selection === "scissors" || this.roboPlayer.selection === "lizard")) {
      this.winner = "Human";
      this.updateWins(human)
    } else if (this.humanPlayer.selection === "paper" && (this.roboPlayer.selection === "rock" || this.roboPlayer.selection === "alien")) {
      this.winner = "Human";
      this.updateWins(human)
    } else if (this.humanPlayer.selection === "scissors" && (this.roboPlayer.selection === "paper" || this.roboPlayer.selection === "lizard")) {
      this.winner = "Human";
      this.updateWins(human)
    } else if (this.humanPlayer.selection === "lizard" && (this.roboPlayer.selection === "paper" || this.roboPlayer.selection === "alien")) {
      this.winner = "Human";
      this.updateWins(human)
    } else if (this.humanPlayer.selection === "alien" && (this.roboPlayer.selection === "scissors" || this.roboPlayer.selection === "rock")) {
      this.winner = "Human";
      this.updateWins(human)
    } else {
      this.winner = "Computer";
      this.updateWins(robot)
    }
  }
  updateWins(player) {
    if (this.winner) {
    player.wins++
    player.saveWinsToStorage()
    var playerWins = player.retrieveWinsFromStorage()
    }
  }
}
