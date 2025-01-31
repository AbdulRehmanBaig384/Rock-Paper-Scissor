// TO TOGGLE BETWEEN LIGHT AND DARK MODES
let modeButton = document.querySelector(".toggle-mode");
let body = document.querySelector("body");
modeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    modeButton.innerHTML='<i class="fa-solid fa-moon"></i>';
});

// TO RESET THE GAME SCORE
let resetButton = document.querySelector(".reset-button");
const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userScoreText.innerText = userScore;
    compScoreText.innerText = compScore;
    message.innerText = "Make Your Move";
};
resetButton.addEventListener("click", resetGame);

let userScore = 0;
let compScore = 0;

let message = document.querySelector("#message");
let userScoreText = document.querySelector("#userScore");
let compScoreText = document.querySelector("#compScore");

const drawGame = () => {
    message.innerText = "Game was a draw. Play again!";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScoreText.innerText = userScore;
        message.innerText =`You win! Your ${userChoice} beats ${compChoice}`;
    } else {
        compScore++;
        compScoreText.innerText = compScore;
        message.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    }
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
