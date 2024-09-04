console.info("This game is similar to Rock, Paper, Scissors. You choose one object and the computer will choose another, at random. After 5 rounds, a winner (or a tie game) will be declared! GLHF")

let currentRound = 1;
let userWins=0;
let compWins=0;


/*Button event listeners and button function*/
document.getElementById('index').addEventListener('click', function() {
    handleButtonClick("INDEX");
    startRound("INDEX");
});

document.getElementById('table').addEventListener('click', function() {
    handleButtonClick("TABLE");
    startRound("TABLE");
});

document.getElementById('query').addEventListener('click', function() {
    handleButtonClick("QUERY");
    startRound("QUERY");
});

function handleButtonClick(userSelection) {
    let myVariable = userSelection;
    console.log('User\'s selection: ', myVariable);
    runMyFunction(myVariable);
}

function runMyFunction(value) {
    alert("You clicked " + value);
}

function updateRoundInfo() {
    document.getElementById('userWins').innerText = userWins;
    document.getElementById('currentRound').innerText = currentRound;
}


/*Play a round*/
function getCompSelection () {
    let compSelection = Math.floor((Math.random()*3));
    if (compSelection == 0) {
        return 'INDEX';
    } else if (compSelection == 1) {
        return 'TABLE';
    } else {
        return 'QUERY';
    }
}

function startRound(userSelection) {
    let compSelection = getCompSelection ();
    console.log("Computer\'s selection: " + compSelection);

    /*this determines the round winner*/
    if (compSelection == userSelection) {
        alert("Tie!");
        advanceRound();
    } else if ((userSelection == 'TABLE' && compSelection == 'QUERY')
    || (userSelection == 'QUERY' && compSelection == 'INDEX')
    || (userSelection == 'INDEX' && compSelection == 'TABLE')) {
        alert("You won this round!");
        roundWon();
    } else {
        alert("Oop! I won this round. Better luck next time!");
        roundLost(); 
    }
}

/*After a round has taken place and the round is over and we need to advance to the next round*/
function advanceRound() {
    currentRound += 1;
    updateRoundInfo();
    if (currentRound>5) {
        checkWinner();
    }
}

/*When a user wins or loses a round*/
function roundWon() {
    userWins += 1;
    advanceRound();
}

function roundLost() {
    compWins += 1;
    advanceRound();
}

/*Check for a winner after 5 rounds are done!*/
function checkWinner() {
    if (userWins > compWins) {
        alert("Oh nice! You won the game!");
        endGame();
    } else if (userWins < compWins) {
        alert("Oof. You lost...")
        endGame();
    } else {
        alert("Great minds think alike! We tied!");
        endGame();
    }
}

/*After 5 rounds have been completed, the game needs to end, current round, user wins and computer wins will all be reset so another game can be played*/
function endGame() {
    currentRound = 1;
    userWins = 0;
    compWins = 0;
    alert("Let's play again!");
    updateRoundInfo();
}