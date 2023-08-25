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

//event listener for player 1 click of game board
//if space empty add sign to gameboard and send space coordinates to player score
//if space filled notify user

const playerSelection = (() => {
    let column = document.querySelectorAll('.column');
    column.forEach(item => {
        item.addEventListener('click', () => {
            if (item.innerText === "") {
                item.innerText = player1.playerSign();
                player1.playerScore.push(item.id);
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

const player1 = player("Player 1", "X");
/*const player2 = player("Player 2", "O"); */



//score the game as players make picks
//loop over playerScore: check for row using parseInt , push last item (-1) to array and check,  
//parseInt(player1.playerScore[0]);

