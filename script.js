
//create object game board with module
//for loop create 3 rows, for loop create 3 columns
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
    let playerTest = () => console.log(`${name} has this sign ${sign}`);
    let playerChoice = () => {
        document.querySelectorAll('.column').forEach(item => {
            item.addEventListener('mouseenter', event => {
                console.log("click test")
            } )
        })
    }
    return { playerName, playerSign, playerChoice, playerTest }
};

const player1 = player("Player 1", "X");

//create gameflow object with module
//