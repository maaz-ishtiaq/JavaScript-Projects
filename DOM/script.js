// Selecting elements
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;

// Function to get the computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a Tie!";
    }

    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        userScore++;
        userScorePara.textContent = userScore;
        return "You Win! 🎉";
    } else {
        compScore++;
        compScorePara.textContent = compScore;
        return "Computer Wins! 💻";
    }
}

// Function to play the game
function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const resultMessage = determineWinner(userChoice, computerChoice);
    
    msg.textContent = `Computer chose ${computerChoice}. ${resultMessage}`;
}

// Adding event listeners to choices
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id; // Getting user choice from id
        playGame(userChoice);
    });
});
