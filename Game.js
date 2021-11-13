class Game {
  constructor() {
    this.hasWinner = false;
    this.isDraw = false;
    this.gameType = null;
    this.humanPlayer = new Player("Human", "Face", "Player One");
    this.roboPlayer = new  Player ("Computer", "Laptop",  "Player Two");
  }
  //Buggy because clicks on words rather than buttons.
  chooseGame(){
    if (event.target.id === "classicChoice") {
      this.gameType = "classic";
      console.log("choose game method:", this.gameType)
      playClassicGame()
    } else if (event.target.id === "difficultChoice") {
      this.gameType = "difficult";
      console.log("choose game method:", this.gameType)
      playDifficultGame()
    }
  }
  determineClassicWinner() {
    if (this.humanPlayer.selectedFighter ===  this.roboPlayer.selectedFighter ) {
      console.log("it's a draw")
      return `It's a draw.`
    } else if (this.humanPlayer.selectedFighter === "rock" && this.roboPlayer.selectedFighter === "scissors")  {
      console.log("User wins")
      return  `User wins!`
    } else if (this.humanPlayer.selectedFighter === "paper" && this.roboPlayer.selectedFighter === "rock") {
       console.log("User  wins");
       return  `User wins!`
    } else if (this.humanPlayer.selectedFighter === "scissors" && this.roboPlayer.selectedFighter === "paper") {
       console.log("User wins")
       return  `User wins!`
    } else {
       console.log("Computer wins")
       return `Computer wins!`
    }
    setTimeout(function() {
      console.log("Reset  here")
    }, 1000)
  }
  determineDifficultWinner() {
    if (this.humanPlayer.selectedFighter === this.roboPlayer.selectedFighter) {
      console.log("it's a draw")
    } else if (this.humanPlayer.selectedFighter === "rock" && (this.roboPlayer.selectedFighter === "scissors" || this.roboPlayer.selectedFighter ===  "lizard")) {
      console.log("User wins")
    } else if (this.humanPlayer.selectedFighter === "paper" && (this.roboPlayer.selectedFighter === "rock" || this.roboPlayer.selectedFighter === "alien")) {
      console.log("User  wins");
    } else if (this.humanPlayer.selectedFighter === "scissors" && (this.roboPlayer.selectedFighter === "paper" || this.roboPlayer.selectedFighter === "lizard")) {
      console.log("User wins")
    } else if (this.humanPlayer.selectedFighter === "lizard" && (this.roboPlayer.selectedFighter === "paper" || this.roboPlayer.selectedFighter === "alien")) {
      console.log("User wins")
    } else if (this.humanPlayer.selectedFighter === "alien" && (this.roboPlayer.selectedFighter === "scissors" || this.roboPlayer.selectedFighter === "rock")) {
      console.log("User wins")
    } else {
      console.log("Computer wins")
    }
    setTimeout(function(){
      console.log("Reset  here")
    }, 1000)
  }
}



//When Player wins, save to localStorage and update innerHTML
