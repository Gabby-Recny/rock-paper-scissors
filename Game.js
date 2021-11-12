class Game {
  constructor(gameType) {
    this.hasWinner = false;
    this.isDraw = false;
    this.gameType = gameType
    this.humanPlayer = new Player("Human", "Face", "Player One");
    this.roboPlayer = new  Player ("Computer", "Laptop",  "Player Two");
  }
  chooseGame(){
    if (classicGameBtn.click) {
      this.gameType = "classic";
      console.log(this.gameType)
    } else if (difficultGameBtn.click) {
      this.gameType = "difficult";
      console.log(this.gameType)
    }
  }
  determineClassicWinner() {
    if (userChoice === computerChoice ) {
      console.log("it's a draw")
      return `It's a draw.`
    } else if (userChoice === "rock" && computerChoice === "scissors")  {
      console.log("User wins")
      return  `User wins!`
    } else if (userChoice === "paper" && computerChoice === "rock") {
       console.log("User  wins");
       return  `User wins!`
    } else if (userChoice === "scissors" && computerChoice === "paper") {
       console.log("User wins")
       return  `User wins!`
    } else {
       console.log("Computer wins")
       return `Computer wins!`
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
