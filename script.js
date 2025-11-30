


// document.querySelector() will return the first match of what you are looking for. 
// document.querySelectorAll() will return a nodelist. It can select through all the elemetns that have the same class name.
// For example the below code finds the first game-square div and makes it red. 

// made a const variable and gave it 2 players.
const players = ['X', 'O'];

// made const variables and gave them their respective values in the HTML file.
const gameSquares = document.querySelectorAll('.game-square'); 
const restartButton = document.getElementById('button-play-again');
const playAgain = document.querySelector('#play-again');

// made all the win condtions
const winConditions = [
  [0, 1, 2], 
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
// The code below is setting up the game, so the area is there hence the strings ('') in the array. 
// made a let variable so currentPlayer is always starting at X.
// made a let variable active and set it to a false boolean so the game doesnt start until we say so. 
let playArea = ['', '', '', '', '', '', '', '', '',];
let currentPlayer = 'X';
let active = false;

function gameStart() {
  gameSquares.forEach(game-Square => game-Square.addEventListener('click',))
}

function squareClicked() {
  const square0
}