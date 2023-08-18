
//create object game board
//factory function
//for loop create 3 rows, for lipp create 3 columns
//manipulates the DOM to draw board

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
