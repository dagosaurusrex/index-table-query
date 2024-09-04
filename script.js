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

function handleButtonClick(buttonValue) {
    let myVariable = buttonValue;
    console.log('Button clicked ', myVariable);
    runMyFunction(myVariable); 
}

function runMyFunction(value) {
    alert("You clicked " + value);
}

function startRound(buttonValue) {
    let compSelection = 'TABLE';
    if (compSelection == buttonValue) {
        alert("Tie!");
        /*advanceRound();  I'll add this back in after I create the advanceRound function*/
    } else if ((buttonValue == 'TABLE' && compSelection == 'QUERY')
    || (buttonValue == 'QUERY' && compSelection == 'INDEX')
    || (buttonValue == 'INDEX' && compSelection == 'TABLE')) {
        alert("You won this round!");
        /*roundWon();  I'll add this back in after I create the roundWon() function */
    } else {
        alert("Oop! I won this round. Better luck next time!");
        /*roundLost();  I'll add this back in after I create the roundLost() function*/
    }
}