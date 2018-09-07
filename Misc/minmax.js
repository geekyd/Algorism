// min max algorithm for tic tac toe in js

let allBoards = null;
let currentBoard = null;
let test = 0;

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

    return 0; // Game result is a draw
}

function generateBoard(turn, board) {
    let player = turn%2 == 1 ? 1 : 2;
    test ++;

    if (turn == 9) {
      board.score = checkWinner(board.board, player);
      return;  
    }

    let result = checkWinner(board.board, player);

    if (result === -1 || result === 1) {
        board.score = result;
        return;
    }
    
    board.childList = [];
    for (let i =0; i<3 ; i++) {
        for (let j =0; j<3; j++) {
            let thisBoard = JSON.parse( JSON.stringify( board ) );
            if (thisBoard.board[i][j] === -1) {
                thisBoard.board[i][j] = player;
                let child = new childBoard();
                child.board = JSON.parse( JSON.stringify( thisBoard ) ).board;
                child.score = 0;
                generateBoard(turn + 1, child);
                board.childList.push(child)
            }
        }
    }

    let values = board.childList.map((b) => { if(isNaN(b.score)) {return 0 } else return b.score });
    board.score = values.reduce((a, b) => { return a+b })
}

// player 1 is 0 & player 2 is 1
function generateAll() {
    let parentBoard = Object.assign({board: [ [-1,-1,-1], [-1,-1,-1], [-1,-1,-1] ], childList: []}, childBoard);
    generateBoard(1, parentBoard);
    console.log(test)
    console.log(parentBoard)
}

function game() {
    generateAll()
}

game();