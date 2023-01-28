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

let choices = ["rock", "paper", "scissors"]

function computerChoice() {  // Computer chooses random RPS value from array
    return choices[(Math.floor(Math.random() * choices.length))]
}

function playerChoice() {  // Player makes a choice
    return prompt("What will you play? Rock, Paper or Scissors?").toLowerCase()
    // TODO input sanitization - ensure value chosen is in choices array
}

function getGameResult(player, computer) {
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
    } else {
        console.log(`You win, ${player} beats ${computer}!`)
    }
}

// MAIN LOGIC
for (let i = 0; i < 3; i++) {
    getGameResult(playerChoice(), computerChoice())
}


