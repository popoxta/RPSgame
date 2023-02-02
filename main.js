/*
 -------------- RPS GAME --------------
 In the main game LOOP vvvv
 Computer chooses random value (R, P, S) - stored in computerChoice (function) DONE
 Player can choose a value via input (ROCK, PAPER, SCISSORS) - stored in playerChoice (function) DONE

 The result is evaluated vvv

 paper beats rock
 rock beats scissor
 scissor beats paper

 ITS A DRAW IF...
 computerchoice === playerchoice

 COMPUTER WINS IF..
 if computerchoice is paper and playerchoice is rock, so on so on for all conds. :-]

  PLAYER WINS IF...
  since all conditions are covered (draw, computer wins.. etc)
  except for when the player wins, else; player wins!
 */

const CHOICES = ["rock", "paper", "scissors"]
const ROUNDS = 5

function computerChoice() {  // Computer chooses random RPS value from array
    return CHOICES[(Math.floor(Math.random() * CHOICES.length))]
}

// function playerChoice() {  // Player makes a choice
//     let playerInput = prompt("What will you play? Rock, Paper or Scissors?").toLowerCase()
//
//     if (!CHOICES.includes(playerInput)) {
//         console.log("That is not a valid input!")
//         playerChoice()
//
//     } else {
//         return playerInput
//     }
// }

function playRound(player) {
    let computer = computerChoice()

    console.log(`Player chose ${player}`)
    console.log(`Computer chose ${computer}`)

    if (player === computer) {
        console.log("It's a draw!")
    } else if (
        computer === "paper" && player === "rock" ||
        computer === "rock" && player === "scissors" ||
        computer === "scissors" && player === "paper"
    ) {
        console.log(`Computer wins, ${computer} beats ${player}!`)
        return "cwin"
    } else {
        console.log(`You win, ${player} beats ${computer}!`)
        return "pwin"
    }
}
// function playGame() {
//     let playerScore = 0
//     let computerScore = 0
//
//     for (let i = 0; i < ROUNDS; i++) {
//         let round = playRound(playerChoice(), computerChoice())
//         if (round === "pwin") {
//             playerScore++
//         } else if (round === "cwin") {
//             computerScore++
//         }
//     }
//
//     let winner = (playerScore > computerScore ? "Player" : "Computer")
//     console.log(`The winner of this round is ${winner}!!!\nComputer: ${computerScore}\nPlayer: ${playerScore}`)
// }

// MAIN LOGIC
// playGame()

// const rockBtn = document.getElementById('rock')
// const paperBtn = document.getElementById('paper')
// const scissorsBtn = document.getElementById('scissors')

/*
get all buttons as a list


 */
//retrieve buttons
const buttons = document.querySelectorAll('button')

//play a single round, player input via button.
buttons.forEach(button => button.addEventListener('click', (e)=>{
    playRound(e.target.id)
}))













