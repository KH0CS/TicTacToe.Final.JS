


// document.querySelector() will return the first match of what you are looking for. 
// document.querySelectorAll() will return a nodelist. It can select through all the elemetns that have the same class name.
// For example the below code finds the first game-square div and makes it red. 



const gameSquares = document.querySelectorAll('.game-square'); 
const playAgain = document.querySelector("#play-again");
const winConditions = [
  [0, 1, 2], 
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
]