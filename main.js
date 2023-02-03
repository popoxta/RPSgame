/*
While the game is playing;

    Get the value of the button pressed
    Check to see if the computer or player won the round
    Get the result of the round
    and keep going!

If the computer or player reaches a score of 5,
the game should end - buttons should no longer work
the winner will be announced :-)

 */
const CHOICES = ["rock", "paper", "scissors"]
const WIN_SCORE = 5

function computerChoice() {  // Computer chooses random RPS value from array
    return CHOICES[(Math.floor(Math.random() * CHOICES.length))]
}
function getResult(player) {
    const computer = computerChoice()

    if (player === computer) {
        updateResults("It's a draw!")
    } else if (
        computer === "paper" && player === "rock" ||
        computer === "rock" && player === "scissors" ||
        computer === "scissors" && player === "paper"
    ) {
        updateResults(`Computer wins, ${computer} beats ${player}!`)
        return false
    } else {
        updateResults(`You win, ${player} beats ${computer}!`)
        return true
    }
}
function updateResults(text) {
    const resultsBox = document.getElementById('results-box')
    const gameResult = resultsBox.children[1]
    gameResult.textContent = text
}
function getWinner(playerScore, computerScore){

    (playerScore > computerScore) ? updateResults(`You won ${playerScore} to ${computerScore}!`) :
        updateResults(`You lost! ${playerScore} to ${computerScore}!`)
}

function playGame() {
    let playerScore = 0
    let computerScore = 0

    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => button.addEventListener('click', function playRound(e) {

        if (playerScore >= WIN_SCORE || computerScore >= WIN_SCORE) {
            buttons.forEach(button => button.removeEventListener('click', playRound))
            getWinner(playerScore, computerScore)

        } else {

            if (getResult(e.target.id)) {
                playerScore++
            } else {
                computerScore++
            }

        }}
    ))
}

playGame()