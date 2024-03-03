// The integer values for rock, paper, and scissors will be defined as:
//
//  Rock:       -1
//  Paper:      0
//  Scissors:   1
//
// How to winner is calculated:
//
// RP   -1 * 0 : 0      > wins
// RS   -1 * 1 : -1     < wins
// SP    1 * 0 : 0      > wins

// Create an array of strings to use as an enum to convert a number
// to the string value
const choice = ["Rock", "Paper", "Scissors"];
const domFeedback = document.getElementById("rpsFeedback");
const domResult = document.getElementById("rpsResult");
const domPlayerScore = document.getElementById("playerScore");
const domCompScore = document.getElementById("computerScore");
const domResetBtn = document.getElementById("resetBtn");
let pScore = 0;
let cScore = 0;
let round = 1;
let gameOver = false;


function isPlayerWinner(P, C) {
    if(P * C == 0) {
        return P > C;
    }
    return P < C;
}

function getComputerChoice() {
    // Get random value between 0 and 9
    const randVal = Math.floor(Math.random() * 10);
    // 0-3: Rock, 4-6: Paper, 7-9: Scissors
    if(randVal < 7) {
        if(randVal < 4) {
            return -1;  // Rock
        }
        return 0;   // Paper
    }
    return 1;   //Scissors
}

function play(P) {
    // Quit if the game is already over
    if(gameOver){
        return;
    }

    const C = getComputerChoice();
    let playerWon = isPlayerWinner(P, C);
    
    // Toast the feedback to the screen for the player and computer's choices
    sendFeedback(P, C);
    // Check for tie
    if(P == C) {
        domResult.textContent = "Tie.";
    }
    // Determine Round Winner
    else {
        if(playerWon) {
            pScore++;
        }
        else {
            cScore++;
        }
        updateScores();
        announceRound(playerWon);
        // Announce Outcome
        if(pScore == 2 || cScore == 2) {
            announceWinner(playerWon);
        }
    }
    round++;
}

function sendFeedback(P, C) {
    domFeedback.textContent += `Round: ${round}` + "\n";
    domFeedback.textContent += `Player Chose:\t${choice[P+1]}` + "\n";
    domFeedback.textContent += `Computer Chose:\t${choice[C+1]}` + "\n\n";
    domFeedback.scrollTop = domFeedback.scrollHeight;
}

function updateScores() {
    domPlayerScore.textContent = pScore;
    domCompScore.textContent = cScore;
}

function announceRound(playerWon) {
    if(playerWon) {
        domResult.textContent = `Player Wins Round: ${round}`;
    }
    else {
        domResult.textContent = `Computer Wins Round: ${round}`;
    }
}

function announceWinner(playerWon) {
    if(playerWon) {
        domResult.textContent += " \nCongratulations! You Won.";
    }
    else {
        domResult.textContent += " \nGame Over! You Lose.";
    }
    gameOver = true;
    domResetBtn.style.visibility = "visible";
}

function reset() {
    pScore = 0;
    cScore = 0;
    round = 1;
    gameOver = false;
    domFeedback.textContent = "";
    domResult.textContent = "";
    domResetBtn.style.visibility = "hidden";
    updateScores();
}