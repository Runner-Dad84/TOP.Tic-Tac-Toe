//create object game board with module IIFE
//for loop create 3 rows, for loop create 3 columns
//add class to board boxes and unique id for each square
//manipulates the DOM to draw board using grid

const gameBoard = (() => {
    const board = document.querySelector('#gameBoard');
    let grid = [];
    value = 0;
    for (i = 0; i < 3; i++) {
        let row = document.createElement("div");
        row.classList = "row";
        board.appendChild(row);
        grid[i] = [];
        
        for (j = 0; j < 3; j++) {
            let column = document.createElement("div");
            column.classList = "column";
            row.appendChild(column);
            grid[i][j] = value++;   
            column.id = 1 + grid[i][j];
        }
    }
})();

//event listener for player 1 click of game board
//if space empty add sign to gameboard and send space coordinates to player score
//if space filled notify user

const playerSelection = (() => {
    let column = document.querySelectorAll('.column');
    column.forEach(item => {
        item.addEventListener('click', () => {
            if (item.innerText === "") {
                item.innerText = player1.playerSign();
                player1.playerScore.push(Number(item.id));
                return player1.playerScore;
            } else {
                alert("This space is taken!");
            }
        })
    })
})();

//create objects for players using factory function
//assign name and sign
//click event creates player sign X or O

const player = (name, sign) => {
    let playerName = () => name;
    let playerSign = () => sign;
    let playerScore = [];
    return { playerName, playerSign, playerScore }
};
const player2 = player("Player 2", "O"); 
const player1 = player("Player 1", "X");

//game solutions//

const solutions = (() => {
  const solutionSets = () => {
    [0, 1, 2]; /*rows*/
    [3, 4, 5];
    [6, 7, 8];
    [0, 3, 6]; /*columns*/
    [1, 4, 7];
    [2, 5, 8];
    [0, 4, 8]; /*diagnals*/
    [2, 4, 6];
  };
  return { solutionSets };
}
)();