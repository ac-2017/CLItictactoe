
process.stdout.write('\033c');

console.log('Welcome to tic tac toe\n\n')
const readline = require ('readline');
let playerX, playerO;

var prompt1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

prompt1.question(">>Player X Name:  ", function(answer) {
   console.log("Hello " + answer + '\n');
   playerX = answer;
   prompt1.close();

  var prompt2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
   prompt2.question(">>Player O Name:  ", function(answer) {
     console.log("Hello " + answer);
     playerO = answer;
     prompt2.close();
     startGame();
  });
});

function startGame () {
  var board = {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ', 
    7: ' ',
    8: ' ',
    9: ' '
  }
  console.log('\nStarting Game')
  takeTurn(board, 'X')
}

function displayBoard (board) {
  console.log(` ${board[1]} | ${board[2]} | ${board[3]}\n-----------\n ${board[4]} | ${board[5]} | ${board[6]}\n-----------\n ${board[7]} | ${board[8]} | ${board[9]}`)
}

function checkBoard (board) {
  if (board[1] + board[2] + board[3] === 'XXX' || board[1] + board[2] + board[3] === 'OOO') {
    return board[2]
  } else if (board[4] + board[5] + board[6] === 'XXX' || board[4] + board[5] + board[6] === 'OOO') {
    return board[5]
  } else if (board[7] + board[8] + board[9] === 'XXX' || board[7] + board[8] + board[9] === 'OOO') {
    return board[8]
  } else if (board[1] + board[4] + board[7] === 'XXX' || board[1] + board[4] + board[7] === 'OOO') {
    return board[4]
  } else if (board[2] + board[5] + board[8] === 'XXX' || board[2] + board[5] + board[8] === 'OOO') {
    return board[5]
  } else if (board[3] + board[6] + board[9] === 'XXX' || board[3] + board[6] + board[9] === 'OOO') {
    return board[6]
  } else if (board[1] + board[5] + board[9] === 'XXX' || board[1] + board[5] + board[9] === 'OOO') {
    return board[6]
  } else if (board[3] + board[5] + board[7] === 'XXX' || board[3] + board[5] + board[7] === 'OOO') {
    return board[5]
  } else {
    return null
  }
}

function takeTurn(board, player) {
  console.log("Your turn, ", player)
  displayBoard(board)
  var prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  prompt.question(">>Choose square 1-9   ", (square) => {
    if (board[square] !== ' ') {
      prompt.close()
      console.log('Incorrect choice')
      takeTurn(board,player)
    } else {
      board[square] = player;
      prompt.close();
      if (checkBoard(board)) {
        checkBoard(board) === 'X' ?
        console.log(playerX + ' wins\n'):
        console.log(playerO + ' wins\n')
        displayBoard(board)
        return;
      }
      player === 'X' ? 
      takeTurn(board, 'O') : 
      takeTurn(board, 'X')
    } 
  });
}