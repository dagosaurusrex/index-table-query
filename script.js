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
        advanceRound(); /* I'll add this back in after I create the advanceRound function*/
    } else if ((userSelection == 'TABLE' && compSelection == 'QUERY')
    || (userSelection == 'QUERY' && compSelection == 'INDEX')
    || (userSelection == 'INDEX' && compSelection == 'TABLE')) {
        alert("You won this round!");
        advanceRound();/*roundWon();  I'll add this back in after I create the roundWon() function */
    } else {
        alert("Oop! I won this round. Better luck next time!");
        advanceRound();/*roundLost();  I'll add this back in after I create the roundLost() function*/
    }
}

/*After a round has started and completed, the round is over and we need to advance to the next round*/
function advanceRound() {
    currentRound += 1;
    /*if (currentRound>5) {
        checkWinner();
    }

    commenting this part out until we create the checkWinner ()*/
}