


// document.querySelector() will return the first match of what you are looking for. 
// document.querySelectorAll() will return a nodelist. It can select through all the elemetns that have the same class name.
// For example the below code finds the first game-square div and makes it red. 

// made a const variable and gave it 2 players.


// made const variables and gave them their respective values in the HTML file.
/* const gameSquares = document.querySelectorAll('.game-board'); 
const restartButton = document.getElementById('button-play-again');
const playAgain = document.querySelector('#play-again');
*/
// made all the win conditions
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
let playerX = 'X';
let playerO = 'O';
let currentPlayer = playerX;
let gameSquare;


// What the window.onload is doing is when the game loads up then function will run. The function pretty much gets the play area from the HTML document by the Element class name.
window.onload = function () {
  gameSquare = document.getElementsByClassName('game-square');
  // We are making all the cells clickable for either and X or an O. The event listener is looking for a click and when there is a click it will run the checkBox function which should mark an X or an O depending who's turn it is. 
  for (let square of gameSquare) {
    square.addEventListener('click', checkBox);
  } 
}
// When this function is run it marks the square with an X or an O depending who's turn it is. and the current player changes after each click.
function checkBox() {


  // This updates the playArea array so we know and the game knows that there is a mark in the sqare.
  const squareIndex = parseInt(this.getAttribute('square'));
  if (playArea[squareIndex] != '' ) {
    return;
  }

  this.innerText = currentPlayer;
  currentPlayer = (currentPlayer == playerX) ? playerO : playerX;
}