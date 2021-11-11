class Game {
  constructor() {
    this.hasWinner = false;
    this.isDraw = false;
  }
  playGame() {
    if (userChoice === computerChoice ) {
      console.log("it's a draw")
    } else if (userChoice === "rock" && computerChoice === "scissors")  {
      console.log("User wins")
    } else if (userChoice === "paper" && computerChoice === "rock") {
       console.log("User  wins");
    } else if (userChoice === "scissors" && computerChoice === "paper") {
       console.log("User wins")
    } else {
       console.log("Computer wins")
    }
  }
}
