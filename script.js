console.info("This game is similar to Rock, Paper, Scissors. You choose one object and the computer will choose another, at random. After 5 rounds, a winner (or a tie game) will be declared! GLHF")

let currentRound = 1;
let userWins=0;
let compWins=0;


/*Button event listeners and button function*/
document.getElementById('index').addEventListener('click', function() {
    handleButtonClick("INDEX");
});

document.getElementById('table').addEventListener('click', function() {
    handleButtonClick("TABLE");
});

document.getElementById('query').addEventListener('click', function() {
    handleButtonClick("QUERY");
});

function handleButtonClick(buttonValue) {
    let myVariable = buttonValue;
    console.log('Button clicked ', myVariable);
    runMyFunction(myVariable); 
}

function runMyFunction(value) {
    alert("You clicked " + value);
}