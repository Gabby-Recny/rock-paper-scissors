class Game {
  constructor(gameType) {
    this.hasWinner = false;
    this.isDraw = false;
    this.gameType = gameType
    // this.score =  {
    //   human: 0,
    //   computer: 0,
    // }
  }
  determineClassicWinner() {
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
    setTimeout(function(){
      console.log("Reset  here")
    }, 2000)
  }
  determineDifficultWinner() {
    if (userChoice === computerChoice) {
      console.log("it's a draw")
    } else if (userChoice === "rock" && (computerChoice === "scissors" || computerChoice ===  "lizard")) {
      console.log("User wins")
    } else if (userChoice === "paper" && (computerChoice === "rock" || computerChoice === "alien")) {
      console.log("User  wins");
    } else if (userChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) {
      console.log("User wins")
    } else if (userChoice === "lizard" && (computerChoice === "paper" || computerChoice === "alien")) {
      console.log("User wins")
    } else if (userChoice === "alien" && (computerChoice === "scissors" || computerChoice === "rock")) {
      console.log("User wins")
    } else {
      console.log("Computer wins")
    }
    setTimeout(function(){
      console.log("Reset  here")
    }, 2000)
  }
}



//When Player wins, save to localStorage and update innerHTML
