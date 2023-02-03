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
        return "cwin"
    } else {
        updateResults(`You win, ${player} beats ${computer}!`)
        return "pwin"
    }
}

function updateResults(text) {
    const gameResult = document.getElementById('result')
    gameResult.textContent = text
}

function updateScore(playerScore, computerScore) {
    const scoreCount = document.getElementById('score')
    scoreCount.textContent = `${playerScore} : ${computerScore}`
}

function endGame(playerScore, computerScore) {
    (playerScore > computerScore) ? updateResults(`You won!`) :
        updateResults(`You lost!`)

    const playAgain = document.getElementById('play-again')
    playAgain.style.display = 'block'
    playAgain.addEventListener('click', function restart() {
        playAgain.style.display = 'none'
        playAgain.removeEventListener('click', restart)

        const buttons = document.querySelectorAll('.game-button')
        buttons.forEach(button => button.style.display = 'block')
        updateScore(0, 0)
        playGame()
        console.log("starting a new game!")
    })
}

function playGame() {
    let playerScore = 0
    let computerScore = 0
    function playRound(e) {
        const result = getResult(e.target.id)
        if (result === "pwin") {
            playerScore++
        } else if (result === "cwin"){
            computerScore++
        }

        updateScore(playerScore, computerScore)
        if (playerScore >= WIN_SCORE || computerScore >= WIN_SCORE) {

            buttons.forEach(button => button.removeEventListener('click', playRound))
            buttons.forEach(button => button.style.display = 'none')
            endGame(playerScore, computerScore)
        }
        console.log(playerScore, computerScore)
    }

    const buttons = document.querySelectorAll('.game-button')
    buttons.forEach(button => button.addEventListener('click', playRound))
}


playGame()