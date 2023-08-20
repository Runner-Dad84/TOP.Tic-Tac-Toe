
//create object game board with module IIFE
//for loop create 3 rows, for loop create 3 columns
//add class to board boxes and unique id for each square
//manipulates the DOM to draw board using grid

const gameBoard = (() => {
    const board = document.querySelector('#gameBoard');
    for (i = 0; i < 3; i++) {
        let row = document.createElement("div");
        row.classList = "row";
        board.appendChild(row);
        
        for (j = 0; j < 3; j++) {
            let column = document.createElement("div");
            column.classList = "column";
            column.id = `${[i+1]},${[j+1]}`;
            row.appendChild(column);
        };
    }
})();

//create objects for players using factory function
//assign name and sign
//click event creates player sign X or O

const player = (name, sign) => {
    let playerName = () => name;
    let playerSign = () => sign;
    let playerChoice = () => {
        let square = document.querySelectorAll('.column');
        square.forEach(item => {
            item.addEventListener('click', event => {
                item.innerText = sign;
            } )
        })
    }
    return { playerName, playerSign, playerChoice }
};

const player1 = player("Player 1", "X");
const player2 = player("Player 2", "O");

//create gameflow object with module
//