// min max algorithm for tic tac toe in js

let allBoards = null;
let currentBoard = null;
let test = 0;

// Checks the state of the game if the current user wins then 1 draw 0 & loss is -1
function checkResult() {

}

function childBoard (board) {
    this.board = board
    this.parent = null
    this.childList = []
    this.score = 0 // keeps score of the move, Higher the score higher is the probability of winning
}

function checkWinner(board, turn) {

    // check all rows
    for(let i = 0; i<3; i++) {
        if (board[i][0]!= -1 && board[i][0] === board[i][1] && board[i][1] === board[i][2] ) {
            if(board[i][0] === turn) return 1; // Winner
            else return -1; // Loser
        }
    }

    // check all columns
    for(let i = 0; i<3; i++) {
        if (board[0][i]!= -1 &&  board[0][i] === board[1][i] && board[2][i] === board[1][i] ) {
            if(board[0][i] === turn) return 1; // Winner
            else return -1; // Loser
        }
    }

    // check right diagonal
    if (board[0][0]!= -1 &&  board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        if(board[0][0] === turn) return 1;
        else return -1;
    }
    
    // check left diagonol
    if (board[0][2]!= -1 &&  board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        if(board[0][0] === turn) return 1;
        else return -1;
    }

    if (turn == 9) return 0; // Game result is a draw

    else return -100; // this means the game is still going on
}

function generateBoard(turn, board) {
    let player = turn%2 == 0 ? 1 : 2;

    if (turn == 9) return checkWinner(board.board, player);

    let result = checkWinner(board.board, player == 1? 2: 1);

    if (turn !=0 && result !== -100) {
        board.score = result;
        return;
    }
    
    let currentBoard = JSON.parse( JSON.stringify( board ) );
    board.childList = [];
    for (let i =0; i<3 ; i++) {
        for (let j =0; j<3; j++) {
            if (currentBoard.board[i][j] === -1) {
                currentBoard.board[i][j] = player;
                let child = new childBoard();
                child.board = JSON.parse( JSON.stringify( currentBoard ) ).board;
                generateBoard(turn+1, child);
                board.childList.push(child)
            }
        }
    }
    console.log(board)
    test ++;
}

// player 1 is 0 & player 2 is 1
function generateAll() {
    let parentBoard = Object.assign({board: [ [-1,-1,-1], [-1,-1,-1], [-1,-1,-1] ], childList: []}, childBoard);
    generateBoard(1, parentBoard);
    console.log(test)
}

function game() {
    generateAll()
}

game();