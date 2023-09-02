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

function computer () {
    let pick = Math.ceil(Math.random()*9);
    let selection = document.getElementById(`${pick}`);
    console.log(pick);
    if (selection.innerText === "") {
        selection.innerText = player2.playerSign();
        player2.playerScore.push(pick)
    } else {
        console.log(pick);
        computer();
    }
    //random selection of square
    //if square availble assign sign
    //if square not available run again
}


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
  return [
    [1, 2, 3], /*columns*/
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7], /*rows*/
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9], /*diagnals*/
    [3, 5, 7]
  ];
}
)();

//take player score and compare it to each winner scenario. If the player score contains
//a match of any three it is a win!

function scoreGame (solutions, playerScore) {
for (i = 0; i < solutions.length; i++) {
    let compare = solutions[i].every(element => playerScore.includes(element));
    console.log(compare);
    if (compare === true) {
        return console.log("You win!")
    };
}
};

//player 1 has a turn, picks from available spaces then player 2 has a turn
function turn (player) {
    let turn = true;
    if (turn = true){
        player1.playerSelection();
    } else {

    }

    return !turn;
}